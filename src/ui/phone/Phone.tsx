import { DownFillArrow } from "@/assets/icons";
import { CrossIcon } from "@/assets/icons/cross";
import { Spinner } from "@/ui/spinner";
import { classNames } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import style from "./phone.module.scss";
import { PhoneProps, SelectCountryType } from "./phoneModel";
import "./phone_custom.scss";

const Phone = ({
  label,
  size = "md",
  name,
  disabled,
  allowClear,
  error,
  helpText,
  loaderColor,
  value,
  onPhoneValue,
  onBlur,
  onFocus,
  onClear,
}: PhoneProps) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<SelectCountryType>(
    {} as SelectCountryType
  );
  const [options, setOptions] = useState([]);
  const [countryList, setCountryList] = useState<Array<SelectCountryType>>([]);
  const selectRef = useRef<HTMLInputElement>(null);

  //? @___Handler Functions___@
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChangeSelectCountry = (event: any) => {
    const findCountry = countryList.find((item: SelectCountryType) => item._id === event.value);
    setSelectedCountry(findCountry as SelectCountryType);
    setIsOpen(false);
    selectRef.current!.focus();
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (event: any) => {
    const phoneFormat = selectedCountry.phone.format.replace(/[\s()-]/g, "");

    for (let i = 0; i < event.target.value.length; i++) {
      if (phoneFormat[i] != "X") {
        if (event.target.value[i] !== phoneFormat[i]) {
          return;
        }
      } else {
        if (isNaN(event.target.value[i])) {
          return;
        }
      }
    }
    setInput(event.target.value);

    if (event.target.value.length === phoneFormat.length) {
      typeof onPhoneValue === "function" &&
        onPhoneValue({
          phone: event.target.value,
          country: selectedCountry._id,
        });
    }
  };

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleGetData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://graph.soppiya.biz/data", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          query:
            "query Get_countries {\n  get_countries {\n    _id\n    name\n    flag_icon\n    phone {\n      dialing_code\n      format\n    }\n  }\n}",
          variables: {},
          operationName: "Get_countries",
        }),
      });
      const {
        data: { get_countries },
      } = await response.json();
      setLoading(false);

      const optionsData = get_countries.map((country: SelectCountryType) => {
        return { value: country._id, label: `${country.name} (${country.phone.dialing_code})` };
      });

      setCountryList(get_countries);
      setOptions(optionsData);
    } catch (error) {
      return error;
    }
  };

  //? @___Mount Effect___@
  useEffect(() => {
    handleGetData();
  }, []);

  useEffect(() => {
    if (!countryList.length || !value) return;
    value?.phone && setInput(value.phone);
    const findCountry = countryList.find(
      (c: SelectCountryType) => c._id === value.country
    ) as SelectCountryType;
    value?.country && setSelectedCountry(findCountry);
  }, [value, loading]);

  return (
    <div>
      {label && (
        <div className={style.label_action_wrapper}>
          {label && <label className={classNames(style.label_text)}>{label}</label>}
        </div>
      )}
      {countryList.length && selectedCountry?.name ? (
        <>
          <div className={classNames(style.phone_wrapper, style[size + "_input"])}>
            <div className={classNames(style.flag_wrapper, style[size + "_input"])}>
              <button
                className={classNames(style.prefix)}
                type="button"
                onClick={handleButtonClick}
              >
                <img src={selectedCountry.flag_icon} alt="country" />
                <span className={style.fill_arrow}>
                  <DownFillArrow />
                </span>
              </button>
              <div className={style.country_code}>
                <label htmlFor="telField">{selectedCountry.phone.dialing_code}</label>
              </div>
            </div>
            <div className={style.wrapper}>
              <div className={classNames(style.input_field_wrapper)}>
                <input
                  name={name}
                  type="text"
                  placeholder={selectedCountry.phone.format}
                  value={input}
                  disabled={disabled}
                  onChange={handleInputChange}
                  onBlur={onBlur}
                  onFocus={onFocus}
                  className={classNames(
                    style.input_field,
                    error && error.status && style.error_style,
                    style.prefix_icon_padding
                  )}
                  id="telField"
                  ref={selectRef}
                />
                {allowClear && (
                  <button className={classNames(style.cross_icon)} onClick={onClear} type="button">
                    <CrossIcon />
                  </button>
                )}
              </div>
              {helpText && <p className={style.help_text}>{helpText}</p>}
              {error && error.status && <p className={style.error_text}> {error.message} </p>}
            </div>
            <div className={style.select}>
              <Select
                options={options}
                value={selectedCountry._id}
                onChange={(options) => handleChangeSelectCountry(options)}
                menuIsOpen={isOpen}
                className={classNames(style.custom_select)}
              />
            </div>
          </div>
        </>
      ) : (
        <div
          className={classNames(style.select_field, style.spinner_center, style[size + "_input"])}
        >
          <Spinner size="xsm" color={loaderColor} />
        </div>
      )}
    </div>
  );
};
export default Phone;
