import React, { useCallback, useEffect, useState } from 'react'
import { classNames } from '@/utils';
import OTP from "../ui/otp/OTP"
import Phone from "@/ui/phone/Phone"
import Button from "@/ui/button/Button"
import Banner from "@/ui/banner/Banner"
import SelectLanguage from '@/ui/selectLanguage/SelectLanguage';
import Select from '@/ui/select/Select';
import Spinner from '.@/ui/spinner/Spinner';
import Modal from "@/ui/modal/Modal"
import Card from "@/ui/card/Card"
import CheckBox from "@/ui/modal/Modal"
import SelectTimezone from '@/ui/selectTimezone/SelectTimezone';
import Text from '@/ui/text/Text';
import UserAvatar from '@/ui/userAvatar/UserAvatar';
import Tabs from '@/ui/tabs/Tabs';
import Radio from '@/ui/radio/Radio';
import Table from '@/ui/table/Table';
import DropZone from '@/ui/dropZone/DropZone';
import ColorPicker from '@/ui/colorPicker/ColorPicker';
import "./test.scss"
import style from "./test.module.scss"

// interface imageData {
//   lastModified?:string;
//   lastModifiedDate?:string;
//   name?:string;
//   type?:string;
//   webkitRelativePath?:string;
// }
const Test: React.FC = () => {
  // const [images, setImages] = useState<(string |number)[]>([]);
  /* start select */
  const [selected, setSelected] = useState('today');

  const handleSelectChange = useCallback(
    (value: string) => setSelected(value),
    [],
  );

  const options = [
    { label: 'Today', value: 'today' },
    { label: 'Yesterday', value: 'yesterday' },
    { label: 'LastWeek', value: 'lastWeek' },
    { label: 'Bangladesh', value: 'bangladesh' },
  ];
  // console.log(selected);
  /* end select */
  const [phonData, setPhoneData] = useState({})
  const obj = {
    data: {
      get_countries: [
        {
          _id: "64f5728b0e5ba2693d02f971",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AF.svg",
          name: "Afghanistan",
          phone: {
            _id: "64f59c4c6e0072607ff13e08",
            dialing_code: "+93",
            format: "+93 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f972",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AL.svg",
          name: "Albania",
          phone: {
            _id: "64f59c456e0072607ff13d0c",
            dialing_code: "+355",
            format: "+355 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f973",
          flag_icon: "http://flags.system.cdn.soppiya.biz/DZ.svg",
          name: "Algeria",
          phone: {
            _id: "64f59c406e0072607ff13c58",
            dialing_code: "+213",
            format: "+213 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f974",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AD.svg",
          name: "Andorra",
          phone: {
            _id: "64f59c466e0072607ff13d30",
            dialing_code: "+376",
            format: "+376 XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f975",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AO.svg",
          name: "Angola",
          phone: {
            _id: "64f59c426e0072607ff13ca9",
            dialing_code: "+244",
            format: "+244 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f976",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AR.svg",
          name: "Argentina",
          phone: {
            _id: "64f59c486e0072607ff13d81",
            dialing_code: "+54",
            format: "+54 XX XXXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f977",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AM.svg",
          name: "Armenia",
          phone: {
            _id: "64f59c466e0072607ff13d2a",
            dialing_code: "+374",
            format: "+374 XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f978",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AU.svg",
          name: "Australia",
          phone: {
            _id: "64f59c496e0072607ff13da5",
            dialing_code: "+61",
            format: "+61 X XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f979",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AT.svg",
          name: "Austria",
          phone: {
            _id: "64f59c486e0072607ff13d66",
            dialing_code: "+43",
            format: "+43 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97a",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AZ.svg",
          name: "Azerbaijan",
          phone: {
            _id: "64f59c4e6e0072607ff13e4d",
            dialing_code: "+994",
            format: "+994 XXX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97b",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BH.svg",
          name: "Bahrain",
          phone: {
            _id: "64f59c4d6e0072607ff13e35",
            dialing_code: "+973",
            format: "+973 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97c",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BD.svg",
          name: "Bangladesh",
          phone: {
            _id: "64f59c4c6e0072607ff13df9",
            dialing_code: "+880",
            format: "1XXX (XXX) XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97d",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BY.svg",
          name: "Belarus",
          phone: {
            _id: "64f59c466e0072607ff13d2d",
            dialing_code: "+375",
            format: "+375 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97e",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BE.svg",
          name: "Belgium",
          phone: {
            _id: "64f59c456e0072607ff13cf7",
            dialing_code: "+32",
            format: "+32 XXX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f97f",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BJ.svg",
          name: "Benin",
          phone: {
            _id: "64f59c416e0072607ff13c7c",
            dialing_code: "+229",
            format: "+229 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f980",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BT.svg",
          name: "Bhutan",
          phone: {
            _id: "64f59c4e6e0072607ff13e3b",
            dialing_code: "+975",
            format: "+975 XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f981",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BO.svg",
          name: "Bolivia",
          phone: {
            _id: "64f59c496e0072607ff13d90",
            dialing_code: "+591",
            format: "+591 XXXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f982",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BA.svg",
          name: "Bosnia and Herzegovina",
          phone: {
            _id: "64f59c476e0072607ff13d4e",
            dialing_code: "+387",
            format: "+387 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f983",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BW.svg",
          name: "Botswana",
          phone: {
            _id: "64f59c446e0072607ff13ce2",
            dialing_code: "+267",
            format: "+267 XX XX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f984",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BR.svg",
          name: "Brazil",
          phone: {
            _id: "64f59c486e0072607ff13d84",
            dialing_code: "+55",
            format: "+55 XX XXXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f985",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BN.svg",
          name: "Brunei",
          phone: {
            _id: "64f59c4a6e0072607ff13dba",
            dialing_code: "+673",
            format: "+673 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f986",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BG.svg",
          name: "Bulgaria",
          phone: {
            _id: "64f59c456e0072607ff13d18",
            dialing_code: "+359",
            format: "+359 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f987",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BF.svg",
          name: "Burkina Faso",
          phone: {
            _id: "64f59c416e0072607ff13c73",
            dialing_code: "+226",
            format: "+226 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f988",
          flag_icon: "http://flags.system.cdn.soppiya.biz/BI.svg",
          name: "Burundi",
          phone: {
            _id: "64f59c436e0072607ff13cca",
            dialing_code: "+257",
            format: "+257 XX XX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f989",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CV.svg",
          name: "Cabo Verde",
          phone: {
            _id: "64f59c426e0072607ff13c97",
            dialing_code: "+238",
            format: "+238 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98a",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KH.svg",
          name: "Cambodia",
          phone: {
            _id: "64f59c4b6e0072607ff13df0",
            dialing_code: "+855",
            format: "+855 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98b",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CM.svg",
          name: "Cameroon",
          phone: {
            _id: "64f59c426e0072607ff13c94",
            dialing_code: "+237",
            format: "+237 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98c",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CA.svg",
          name: "Canada",
          phone: {
            _id: "64f59c3f6e0072607ff13c49",
            dialing_code: "+1",
            format: "+1 XXX-XXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98d",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CF.svg",
          name: "Central African Republic",
          phone: {
            _id: "64f59c426e0072607ff13c91",
            dialing_code: "+236",
            format: "+236 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98e",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TD.svg",
          name: "Chad",
          phone: {
            _id: "64f59c426e0072607ff13c8e",
            dialing_code: "+235",
            format: "+235 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f98f",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CL.svg",
          name: "Chile",
          phone: {
            _id: "64f59c496e0072607ff13d87",
            dialing_code: "+56",
            format: "+56 XX XXXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f990",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CN.svg",
          name: "China",
          phone: {
            _id: "64f59c4c6e0072607ff13df6",
            dialing_code: "+86",
            format: "+86 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f991",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CO.svg",
          name: "Colombia",
          phone: {
            _id: "64f59c496e0072607ff13d8a",
            dialing_code: "+57",
            format: "+57 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f992",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KM.svg",
          name: "Comoros",
          phone: {
            _id: "64f59c446e0072607ff13ce8",
            dialing_code: "+269",
            format: "+269 XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f993",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CG.svg",
          name: "Congo (Brazzaville)",
          phone: {
            _id: "64f59c426e0072607ff13ca3",
            dialing_code: "+242",
            format: "+242 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f994",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CD.svg",
          name: "Congo (Kinshasa)",
          phone: {
            _id: "64f59c426e0072607ff13ca6",
            dialing_code: "+243",
            format: "+243 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f995",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CI.svg",
          name: "Cote d'Ivoire (Ivory Coast)",
          phone: {
            _id: "64f59c416e0072607ff13c70",
            dialing_code: "+225",
            format: "+225 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f996",
          flag_icon: "http://flags.system.cdn.soppiya.biz/HR.svg",
          name: "Croatia",
          phone: {
            _id: "64f59c476e0072607ff13d48",
            dialing_code: "+385",
            format: "+385 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f997",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CY.svg",
          name: "Cyprus",
          phone: {
            _id: "64f59c456e0072607ff13d12",
            dialing_code: "+357",
            format: "+357 XX XXXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f998",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CZ.svg",
          name: "Czech Republic",
          phone: {
            _id: "64f59c476e0072607ff13d5d",
            dialing_code: "+420",
            format: "+420 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f999",
          flag_icon: "http://flags.system.cdn.soppiya.biz/DK.svg",
          name: "Denmark",
          phone: {
            _id: "64f59c486e0072607ff13d6c",
            dialing_code: "+45",
            format: "+45 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99a",
          flag_icon: "http://flags.system.cdn.soppiya.biz/DJ.svg",
          name: "Djibouti",
          phone: {
            _id: "64f59c436e0072607ff13cbe",
            dialing_code: "+253",
            format: "+253 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99b",
          flag_icon: "http://flags.system.cdn.soppiya.biz/EC.svg",
          name: "Ecuador",
          phone: {
            _id: "64f59c496e0072607ff13d96",
            dialing_code: "+593",
            format: "+593 XX XXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99c",
          flag_icon: "http://flags.system.cdn.soppiya.biz/EG.svg",
          name: "Egypt",
          phone: {
            _id: "64f59c406e0072607ff13c4f",
            dialing_code: "+20",
            format: "+20 XX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99d",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GQ.svg",
          name: "Equatorial Guinea",
          phone: {
            _id: "64f59c426e0072607ff13c9d",
            dialing_code: "+240",
            format: "+240 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99e",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ER.svg",
          name: "Eritrea",
          phone: {
            _id: "64f59c446e0072607ff13cee",
            dialing_code: "+291",
            format: "+291 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f99f",
          flag_icon: "http://flags.system.cdn.soppiya.biz/EE.svg",
          name: "Estonia",
          phone: {
            _id: "64f59c466e0072607ff13d24",
            dialing_code: "+372",
            format: "+372 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SZ.svg",
          name: "Eswatini",
          phone: {
            _id: "64f59c446e0072607ff13ce5",
            dialing_code: "+268",
            format: "+268 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ET.svg",
          name: "Ethiopia",
          phone: {
            _id: "64f59c436e0072607ff13cb8",
            dialing_code: "+251",
            format: "+251 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/FJ.svg",
          name: "Fiji",
          phone: {
            _id: "64f59c4a6e0072607ff13dcc",
            dialing_code: "+679",
            format: "+679 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/FI.svg",
          name: "Finland",
          phone: {
            _id: "64f59c456e0072607ff13d15",
            dialing_code: "+358",
            format: "+358 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/FR.svg",
          name: "France",
          phone: {
            _id: "64f59c456e0072607ff13cfa",
            dialing_code: "+33",
            format: "+33 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GA.svg",
          name: "Gabon",
          phone: {
            _id: "64f59c426e0072607ff13ca0",
            dialing_code: "+241",
            format: "+241 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GM.svg",
          name: "Gambia",
          phone: {
            _id: "64f59c406e0072607ff13c61",
            dialing_code: "+220",
            format: "+220 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GE.svg",
          name: "Georgia",
          phone: {
            _id: "64f59c4e6e0072607ff13e50",
            dialing_code: "+995",
            format: "+995 XXX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/DE.svg",
          name: "Germany",
          phone: {
            _id: "64f59c486e0072607ff13d78",
            dialing_code: "+49",
            format: "+49 XXXX XXXXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9a9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GH.svg",
          name: "Ghana",
          phone: {
            _id: "64f59c416e0072607ff13c88",
            dialing_code: "+233",
            format: "+233 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9aa",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GR.svg",
          name: "Greece",
          phone: {
            _id: "64f59c446e0072607ff13cf1",
            dialing_code: "+30",
            format: "+30 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ab",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GN.svg",
          name: "Guinea",
          phone: {
            _id: "64f59c416e0072607ff13c6d",
            dialing_code: "+224",
            format: "+224 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ac",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GW.svg",
          name: "Guinea-Bissau",
          phone: {
            _id: "64f59c426e0072607ff13cac",
            dialing_code: "+245",
            format: "+245 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ad",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GY.svg",
          name: "Guyana",
          phone: {
            _id: "64f59c496e0072607ff13d93",
            dialing_code: "+592",
            format: "+592 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ae",
          flag_icon: "http://flags.system.cdn.soppiya.biz/HU.svg",
          name: "Hungary",
          phone: {
            _id: "64f59c466e0072607ff13d1b",
            dialing_code: "+36",
            format: "+36 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9af",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IS.svg",
          name: "Iceland",
          phone: {
            _id: "64f59c456e0072607ff13d09",
            dialing_code: "+354",
            format: "+354 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IN.svg",
          name: "India",
          phone: {
            _id: "64f59c4c6e0072607ff13e02",
            dialing_code: "+91",
            format: "+91 XXXXX XXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ID.svg",
          name: "Indonesia",
          phone: {
            _id: "64f59c496e0072607ff13da8",
            dialing_code: "+62",
            format: "+62 XXXX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IR.svg",
          name: "Iran",
          phone: {
            _id: "64f59c4e6e0072607ff13e44",
            dialing_code: "+98",
            format: "+98 XXX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IQ.svg",
          name: "Iraq",
          phone: {
            _id: "64f59c4d6e0072607ff13e1d",
            dialing_code: "+964",
            format: "+964 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IE.svg",
          name: "Ireland",
          phone: {
            _id: "64f59c456e0072607ff13d06",
            dialing_code: "+353",
            format: "+353 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IL.svg",
          name: "Israel",
          phone: {
            _id: "64f59c4d6e0072607ff13e32",
            dialing_code: "+972",
            format: "+972 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/IT.svg",
          name: "Italy",
          phone: {
            _id: "64f59c476e0072607ff13d54",
            dialing_code: "+39",
            format: "+39 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/JP.svg",
          name: "Japan",
          phone: {
            _id: "64f59c4b6e0072607ff13de4",
            dialing_code: "+81",
            format: "+81 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/JO.svg",
          name: "Jordan",
          phone: {
            _id: "64f59c4d6e0072607ff13e17",
            dialing_code: "+962",
            format: "+962 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9b9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KZ.svg",
          name: "Kazakhstan",
          phone: {
            _id: "64f59c4b6e0072607ff13de1",
            dialing_code: "+7",
            format: "+7 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ba",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KE.svg",
          name: "Kenya",
          phone: {
            _id: "64f59c436e0072607ff13cc1",
            dialing_code: "+254",
            format: "+254 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9bb",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KI.svg",
          name: "Kiribati",
          phone: {
            _id: "64f59c4b6e0072607ff13dd5",
            dialing_code: "+686",
            format: "+686 XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9bc",
          flag_icon: "http://flags.system.cdn.soppiya.biz/XK.svg",
          name: "Kosovo",
          phone: {
            _id: "64f59c476e0072607ff13d45",
            dialing_code: "+383",
            format: "+383 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9bd",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KW.svg",
          name: "Kuwait",
          phone: {
            _id: "64f59c4d6e0072607ff13e20",
            dialing_code: "+965",
            format: "+965 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9be",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KG.svg",
          name: "Kyrgyzstan",
          phone: {
            _id: "64f59c4e6e0072607ff13e53",
            dialing_code: "+996",
            format: "+996 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9bf",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LA.svg",
          name: "Laos",
          phone: {
            _id: "64f59c4c6e0072607ff13df3",
            dialing_code: "+856",
            format: "+856 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LV.svg",
          name: "Latvia",
          phone: {
            _id: "64f59c466e0072607ff13d21",
            dialing_code: "+371",
            format: "+371 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LB.svg",
          name: "Lebanon",
          phone: {
            _id: "64f59c4c6e0072607ff13e14",
            dialing_code: "+961",
            format: "+961 XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LS.svg",
          name: "Lesotho",
          phone: {
            _id: "64f59c446e0072607ff13cdf",
            dialing_code: "+266",
            format: "+266 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LR.svg",
          name: "Liberia",
          phone: {
            _id: "64f59c416e0072607ff13c82",
            dialing_code: "+231",
            format: "+231 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LY.svg",
          name: "Libya",
          phone: {
            _id: "64f59c406e0072607ff13c5e",
            dialing_code: "+218",
            format: "+218 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LI.svg",
          name: "Liechtenstein",
          phone: {
            _id: "64f59c486e0072607ff13d63",
            dialing_code: "+423",
            format: "+423 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LT.svg",
          name: "Lithuania",
          phone: {
            _id: "64f59c466e0072607ff13d1e",
            dialing_code: "+370",
            format: "+370 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LU.svg",
          name: "Luxembourg",
          phone: {
            _id: "64f59c456e0072607ff13d03",
            dialing_code: "+352",
            format: "+352 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MG.svg",
          name: "Madagascar",
          phone: {
            _id: "64f59c446e0072607ff13cd3",
            dialing_code: "+261",
            format: "+261 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9c9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MW.svg",
          name: "Malawi",
          phone: {
            _id: "64f59c446e0072607ff13cdc",
            dialing_code: "+265",
            format: "+265 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ca",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MY.svg",
          name: "Malaysia",
          phone: {
            _id: "64f59c496e0072607ff13da2",
            dialing_code: "+60",
            format: "+60 XX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9cb",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MV.svg",
          name: "Maldives",
          phone: {
            _id: "64f59c4c6e0072607ff13e11",
            dialing_code: "+960",
            format: "+960 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9cc",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ML.svg",
          name: "Mali",
          phone: {
            _id: "64f59c416e0072607ff13c6a",
            dialing_code: "+223",
            format: "+223 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9cd",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MT.svg",
          name: "Malta",
          phone: {
            _id: "64f59c456e0072607ff13d0f",
            dialing_code: "+356",
            format: "+356 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ce",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MH.svg",
          name: "Marshall Islands",
          phone: {
            _id: "64f59c4b6e0072607ff13dde",
            dialing_code: "+692",
            format: "+692 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9cf",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MR.svg",
          name: "Mauritania",
          phone: {
            _id: "64f59c406e0072607ff13c67",
            dialing_code: "+222",
            format: "+222 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MU.svg",
          name: "Mauritius",
          phone: {
            _id: "64f59c416e0072607ff13c7f",
            dialing_code: "+230",
            format: "+230 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MX.svg",
          name: "Mexico",
          phone: {
            _id: "64f59c486e0072607ff13d7e",
            dialing_code: "+52",
            format: "+52 XXX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/FM.svg",
          name: "Micronesia",
          phone: {
            _id: "64f59c4b6e0072607ff13ddb",
            dialing_code: "+691",
            format: "+691 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MD.svg",
          name: "Moldova",
          phone: {
            _id: "64f59c466e0072607ff13d27",
            dialing_code: "+373",
            format: "+373 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MC.svg",
          name: "Monaco",
          phone: {
            _id: "64f59c466e0072607ff13d33",
            dialing_code: "+377",
            format: "+377 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MN.svg",
          name: "Mongolia",
          phone: {
            _id: "64f59c4e6e0072607ff13e3e",
            dialing_code: "+976",
            format: "+976 XX XX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ME.svg",
          name: "Montenegro",
          phone: {
            _id: "64f59c476e0072607ff13d42",
            dialing_code: "+382",
            format: "+382 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MA.svg",
          name: "Morocco",
          phone: {
            _id: "64f59c406e0072607ff13c55",
            dialing_code: "+212",
            format: "+212 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MZ.svg",
          name: "Mozambique",
          phone: {
            _id: "64f59c436e0072607ff13ccd",
            dialing_code: "+258",
            format: "+258 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9d9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MM.svg",
          name: "Myanmar",
          phone: {
            _id: "64f59c4c6e0072607ff13e0e",
            dialing_code: "+95",
            format: "+95 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9da",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NA.svg",
          name: "Namibia",
          phone: {
            _id: "64f59c446e0072607ff13cd9",
            dialing_code: "+264",
            format: "+264 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9db",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NR.svg",
          name: "Nauru",
          phone: {
            _id: "64f59c4a6e0072607ff13dbd",
            dialing_code: "+674",
            format: "+674 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9dc",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NP.svg",
          name: "Nepal",
          phone: {
            _id: "64f59c4e6e0072607ff13e41",
            dialing_code: "+977",
            format: "+977 XXX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9dd",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NL.svg",
          name: "Netherlands",
          phone: {
            _id: "64f59c446e0072607ff13cf4",
            dialing_code: "+31",
            format: "+31 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9de",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NZ.svg",
          name: "New Zealand",
          phone: {
            _id: "64f59c4a6e0072607ff13dae",
            dialing_code: "+64",
            format: "+64 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9df",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NE.svg",
          name: "Niger",
          phone: {
            _id: "64f59c416e0072607ff13c76",
            dialing_code: "+227",
            format: "+227 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NG.svg",
          name: "Nigeria",
          phone: {
            _id: "64f59c416e0072607ff13c8b",
            dialing_code: "+234",
            format: "+234 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KP.svg",
          name: "North Korea",
          phone: {
            _id: "64f59c4b6e0072607ff13ded",
            dialing_code: "+850",
            format: "+850 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/MK.svg",
          name: "North Macedonia",
          phone: {
            _id: "64f59c476e0072607ff13d51",
            dialing_code: "+389",
            format: "+389 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/NO.svg",
          name: "Norway",
          phone: {
            _id: "64f59c486e0072607ff13d72",
            dialing_code: "+47",
            format: "+47 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/OM.svg",
          name: "Oman",
          phone: {
            _id: "64f59c4d6e0072607ff13e29",
            dialing_code: "+968",
            format: "+968 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PK.svg",
          name: "Pakistan",
          phone: {
            _id: "64f59c4c6e0072607ff13e05",
            dialing_code: "+92",
            format: "+92 XXXXX XXXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PW.svg",
          name: "Palau",
          phone: {
            _id: "64f59c4b6e0072607ff13dcf",
            dialing_code: "+680",
            format: "+680 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PS.svg",
          name: "Palestine",
          phone: {
            _id: "64f59c4d6e0072607ff13e2c",
            dialing_code: "+970",
            format: "+970 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PG.svg",
          name: "Papua New Guinea",
          phone: {
            _id: "64f59c4a6e0072607ff13dc0",
            dialing_code: "+675",
            format: "+675 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9e9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PY.svg",
          name: "Paraguay",
          phone: {
            _id: "64f59c496e0072607ff13d99",
            dialing_code: "+595",
            format: "+595 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ea",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PE.svg",
          name: "Peru",
          phone: {
            _id: "64f59c486e0072607ff13d7b",
            dialing_code: "+51",
            format: "+51 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9eb",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PH.svg",
          name: "Philippines",
          phone: {
            _id: "64f59c4a6e0072607ff13dab",
            dialing_code: "+63",
            format: "+63 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ec",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PL.svg",
          name: "Poland",
          phone: {
            _id: "64f59c486e0072607ff13d75",
            dialing_code: "+48",
            format: "+48 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ed",
          flag_icon: "http://flags.system.cdn.soppiya.biz/PT.svg",
          name: "Portugal",
          phone: {
            _id: "64f59c456e0072607ff13d00",
            dialing_code: "+351",
            format: "+351 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ee",
          flag_icon: "http://flags.system.cdn.soppiya.biz/QA.svg",
          name: "Qatar",
          phone: {
            _id: "64f59c4d6e0072607ff13e38",
            dialing_code: "+974",
            format: "+974 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ef",
          flag_icon: "http://flags.system.cdn.soppiya.biz/RO.svg",
          name: "Romania",
          phone: {
            _id: "64f59c476e0072607ff13d57",
            dialing_code: "+40",
            format: "+40 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f0",
          flag_icon: "http://flags.system.cdn.soppiya.biz/RU.svg",
          name: "Russia",
          phone: {
            _id: "64f59c4b6e0072607ff13de1",
            dialing_code: "+7",
            format: "+7 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f1",
          flag_icon: "http://flags.system.cdn.soppiya.biz/RW.svg",
          name: "Rwanda",
          phone: {
            _id: "64f59c436e0072607ff13cb5",
            dialing_code: "+250",
            format: "+250 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f2",
          flag_icon: "http://flags.system.cdn.soppiya.biz/WS.svg",
          name: "Samoa",
          phone: {
            _id: "64f59c4b6e0072607ff13dd2",
            dialing_code: "+685",
            format: "+685 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f3",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SM.svg",
          name: "San Marino",
          phone: {
            _id: "64f59c466e0072607ff13d36",
            dialing_code: "+378",
            format: "+378 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f4",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ST.svg",
          name: "Sao Tome and Principe",
          phone: {
            _id: "64f59c426e0072607ff13c9a",
            dialing_code: "+239",
            format: "+239 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f5",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SA.svg",
          name: "Saudi Arabia",
          phone: {
            _id: "64f59c4d6e0072607ff13e23",
            dialing_code: "+966",
            format: "+966 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f6",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SN.svg",
          name: "Senegal",
          phone: {
            _id: "64f59c406e0072607ff13c64",
            dialing_code: "+221",
            format: "+221 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f7",
          flag_icon: "http://flags.system.cdn.soppiya.biz/RS.svg",
          name: "Serbia",
          phone: {
            _id: "64f59c476e0072607ff13d3f",
            dialing_code: "+381",
            format: "+381 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f8",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SC.svg",
          name: "Seychelles",
          phone: {
            _id: "64f59c426e0072607ff13caf",
            dialing_code: "+248",
            format: "+248 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9f9",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SL.svg",
          name: "Sierra Leone",
          phone: {
            _id: "64f59c416e0072607ff13c85",
            dialing_code: "+232",
            format: "+232 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9fa",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SG.svg",
          name: "Singapore",
          phone: {
            _id: "64f59c4a6e0072607ff13db1",
            dialing_code: "+65",
            format: "+65 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9fb",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SK.svg",
          name: "Slovakia",
          phone: {
            _id: "64f59c476e0072607ff13d60",
            dialing_code: "+421",
            format: "+421 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9fc",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SI.svg",
          name: "Slovenia",
          phone: {
            _id: "64f59c476e0072607ff13d4b",
            dialing_code: "+386",
            format: "+386 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9fd",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SB.svg",
          name: "Solomon Islands",
          phone: {
            _id: "64f59c4a6e0072607ff13dc6",
            dialing_code: "+677",
            format: "+677 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9fe",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SO.svg",
          name: "Somalia",
          phone: {
            _id: "64f59c436e0072607ff13cbb",
            dialing_code: "+252",
            format: "+252 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02f9ff",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ZA.svg",
          name: "South Africa",
          phone: {
            _id: "64f59c446e0072607ff13ceb",
            dialing_code: "+27",
            format: "+27 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa00",
          flag_icon: "http://flags.system.cdn.soppiya.biz/KR.svg",
          name: "South Korea",
          phone: {
            _id: "64f59c4b6e0072607ff13de7",
            dialing_code: "+82",
            format: "+82 XXX XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa01",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SS.svg",
          name: "South Sudan",
          phone: {
            _id: "64f59c406e0072607ff13c52",
            dialing_code: "+211",
            format: "+211 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa02",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ES.svg",
          name: "Spain",
          phone: {
            _id: "64f59c456e0072607ff13cfd",
            dialing_code: "+34",
            format: "+34 XXX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa03",
          flag_icon: "http://flags.system.cdn.soppiya.biz/LK.svg",
          name: "Sri Lanka",
          phone: {
            _id: "64f59c4c6e0072607ff13e0b",
            dialing_code: "+94",
            format: "+94 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa04",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SD.svg",
          name: "Sudan",
          phone: {
            _id: "64f59c436e0072607ff13cb2",
            dialing_code: "+249",
            format: "+249 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa05",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SR.svg",
          name: "Suriname",
          phone: {
            _id: "64f59c496e0072607ff13d9c",
            dialing_code: "+597",
            format: "+597 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa06",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SE.svg",
          name: "Sweden",
          phone: {
            _id: "64f59c486e0072607ff13d6f",
            dialing_code: "+46",
            format: "+46 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa07",
          flag_icon: "http://flags.system.cdn.soppiya.biz/CH.svg",
          name: "Switzerland",
          phone: {
            _id: "64f59c476e0072607ff13d5a",
            dialing_code: "+41",
            format: "+41 XX XXX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa08",
          flag_icon: "http://flags.system.cdn.soppiya.biz/SY.svg",
          name: "Syria",
          phone: {
            _id: "64f59c4d6e0072607ff13e1a",
            dialing_code: "+963",
            format: "+963 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa09",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TW.svg",
          name: "Taiwan",
          phone: {
            _id: "64f59c4c6e0072607ff13dfc",
            dialing_code: "+886",
            format: "+886 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0a",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TJ.svg",
          name: "Tajikistan",
          phone: {
            _id: "64f59c4e6e0072607ff13e47",
            dialing_code: "+992",
            format: "+992 XXX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0b",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TZ.svg",
          name: "Tanzania",
          phone: {
            _id: "64f59c436e0072607ff13cc4",
            dialing_code: "+255",
            format: "+255 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0c",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TH.svg",
          name: "Thailand",
          phone: {
            _id: "64f59c4a6e0072607ff13db4",
            dialing_code: "+66",
            format: "+66 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0d",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TL.svg",
          name: "Timor-Leste",
          phone: {
            _id: "64f59c4a6e0072607ff13db7",
            dialing_code: "+670",
            format: "+670 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0e",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TG.svg",
          name: "Togo",
          phone: {
            _id: "64f59c416e0072607ff13c79",
            dialing_code: "+228",
            format: "+228 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa0f",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TO.svg",
          name: "Tonga",
          phone: {
            _id: "64f59c4a6e0072607ff13dc3",
            dialing_code: "+676",
            format: "+676 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa10",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TN.svg",
          name: "Tunisia",
          phone: {
            _id: "64f59c406e0072607ff13c5b",
            dialing_code: "+216",
            format: "+216 XX XXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa11",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TR.svg",
          name: "Turkey",
          phone: {
            _id: "64f59c4c6e0072607ff13dff",
            dialing_code: "+90",
            format: "+90 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa12",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TM.svg",
          name: "Turkmenistan",
          phone: {
            _id: "64f59c4e6e0072607ff13e4a",
            dialing_code: "+993",
            format: "+993 XX XXXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa13",
          flag_icon: "http://flags.system.cdn.soppiya.biz/TV.svg",
          name: "Tuvalu",
          phone: {
            _id: "64f59c4b6e0072607ff13dd8",
            dialing_code: "+688",
            format: "+688 XXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa14",
          flag_icon: "http://flags.system.cdn.soppiya.biz/UG.svg",
          name: "Uganda",
          phone: {
            _id: "64f59c436e0072607ff13cc7",
            dialing_code: "+256",
            format: "+256 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa15",
          flag_icon: "http://flags.system.cdn.soppiya.biz/UA.svg",
          name: "Ukraine",
          phone: {
            _id: "64f59c466e0072607ff13d3c",
            dialing_code: "+380",
            format: "+380 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa16",
          flag_icon: "http://flags.system.cdn.soppiya.biz/AE.svg",
          name: "United Arab Emirates",
          phone: {
            _id: "64f59c4d6e0072607ff13e2f",
            dialing_code: "+971",
            format: "+971 XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa17",
          flag_icon: "http://flags.system.cdn.soppiya.biz/GB.svg",
          name: "United Kingdom",
          phone: {
            _id: "64f59c486e0072607ff13d69",
            dialing_code: "+44",
            format: "+44 XXXX XXXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa18",
          flag_icon: "http://flags.system.cdn.soppiya.biz/US.svg",
          name: "United States",
          phone: {
            _id: "64f59c3f6e0072607ff13c49",
            dialing_code: "+1",
            format: "+1 XXX-XXX-XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa19",
          flag_icon: "http://flags.system.cdn.soppiya.biz/UY.svg",
          name: "Uruguay",
          phone: {
            _id: "64f59c496e0072607ff13d9f",
            dialing_code: "+598",
            format: "+598 XXXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1a",
          flag_icon: "http://flags.system.cdn.soppiya.biz/UZ.svg",
          name: "Uzbekistan",
          phone: {
            _id: "64f59c4e6e0072607ff13e56",
            dialing_code: "+998",
            format: "+998 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1b",
          flag_icon: "http://flags.system.cdn.soppiya.biz/VU.svg",
          name: "Vanuatu",
          phone: {
            _id: "64f59c4a6e0072607ff13dc9",
            dialing_code: "+678",
            format: "+678 XXXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1c",
          flag_icon: "http://flags.system.cdn.soppiya.biz/VA.svg",
          name: "Vatican City",
          phone: {
            _id: "64f59c466e0072607ff13d39",
            dialing_code: "+379",
            format: "+379 XX XX XX XX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1d",
          flag_icon: "http://flags.system.cdn.soppiya.biz/VE.svg",
          name: "Venezuela",
          phone: {
            _id: "64f59c496e0072607ff13d8d",
            dialing_code: "+58",
            format: "+58 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1e",
          flag_icon: "http://flags.system.cdn.soppiya.biz/VN.svg",
          name: "Vietnam",
          phone: {
            _id: "64f59c4b6e0072607ff13dea",
            dialing_code: "+84",
            format: "+84 XXX XXXX XXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa1f",
          flag_icon: "http://flags.system.cdn.soppiya.biz/YE.svg",
          name: "Yemen",
          phone: {
            _id: "64f59c4d6e0072607ff13e26",
            dialing_code: "+967",
            format: "+967 XXX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa20",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ZM.svg",
          name: "Zambia",
          phone: {
            _id: "64f59c436e0072607ff13cd0",
            dialing_code: "+260",
            format: "+260 XX XXX XXXX"
          }
        },
        {
          _id: "64f5728b0e5ba2693d02fa21",
          flag_icon: "http://flags.system.cdn.soppiya.biz/ZW.svg",
          name: "Zimbabwe",
          phone: {
            _id: "64f59c446e0072607ff13cd6",
            dialing_code: "+263",
            format: "+263 XX XXX XXXX"
          }
        }
      ]
    }
  }


  const languageData = [
    {
      id: 1,
      name: "Bangla",
      label: "Bangla"
    },
    {
      id: 2,
      name: "English",
      label: "English"
    },
    {
      id: 3,
      name: "Hindi",
      label: "Hindi"
    },
    {
      id: 4,
      name: "Urdu",
      label: "Urdu"
    },
  ]

  const tabs = [
    {
      title: "Active",
      id: "active_tab"
    },
    {
      title: "Inactive",
      id: "inactive_tab"
    }
  ]

  const [tabsId, setTabsId] = useState('')
  const onTabs = (id: string) => {
    setTabsId(id)
  }
  // const handleImageUpload = (newFile: (string | number)[]) => {
  //   setImages((prevImages:(string|number|(string|number)[] )) => [...prevImages, newFile]);
  // };

  

  // "jpg", "jpeg", "png"
  const imgFormat: string[] = [];

  return (
    <div className={classNames(style.test)}>

      {images.length > 0 && (
          <div className="image-preview" style={{ display: "flex", flexWrap: "wrap" }}>
            {images.map((file, index) => (
              <div key={index} style={{ margin: "10px"}}>
                {file.url ? ( 
                  <div>
                    <img src={file.url} alt={`Uploaded ${index}`} style={{ width: "200px", userSelect: 'none' }} draggable={false} />
                    <p>{file.fileName}</p>
                  </div>
                ) : (
                  <div className={classes.redFileDiv}>
                    <p>{file.fileName}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      <br />
      <DropZone onImageUpload={handleImageUpload} imgFormat={imgFormat} setTime={1200} />;
      <br />
      <br />
      <ColorPicker/>
      <br />
      <br />
      <Button variant="info">demo</Button>
      <br />
      <Table bgColor="info"  border="bordered" borderColor="secondary" striped="striped" hover="hover" size="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23205060</td>
            <td>Akjm Al-Amin</td>
            <td>25</td>
          </tr>
          <tr>
            <td>23205060</td>
            <td>Akjm Al-Amin</td>
            <td>25</td>
          </tr>
          <tr>
            <td>23205060</td>
            <td>Akjm Al-Amin</td>
            <td>25</td>
          </tr>
          <tr>
            <td>23205060</td>
            <td>Akjm Al-Amin</td>
            <td>25</td>
          </tr>
          <tr>
            <td>23205060</td>
            <td>Akjm Al-Amin</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
      <br />
      <br />
      <br />
      <Radio title="label"/>
      <Radio title="label"/>
      <Radio />

      <br />
      <hr />
      {/* <Select
        label="Select"
        options={options}
        onSelect={handleSelectChange}
        value={"bangladesh"}
      /> */}



      <br />
      <hr />
      <Tabs tabs={tabs} onTabSelect={onTabs}>
        {
          tabsId === "active_tab" && <div >
            active tab
          </div>
        }
        {
          tabsId === "inactive_tab" && <div >
            Inactive tab
          </div>
        }
      </Tabs>
      <br />

      <Card >
        <Card.Header className={style.demo}>
          header
        </Card.Header>
        <Card.Body customPadding="50px 30px" padding="sm" >
          card component
        </Card.Body>
      </Card>
      <br />



      {/* <Modal buttonText='Submit' buttonVariant='info' closeButtonText='Close' >
        dsd
      </Modal> */}
      <Phone
        label='Phone'
        // data={obj.data.get_countries}
        size='sm'
        loaderColor="#BABFC3"
        value={{ country: "64f5728b0e5ba2693d02f978", phone: "+61122225555" }}

      />
      <br />
      {/* <Select
        label='Select Language'
        size='md'
        loaderColor="#BABFC3"

      /> */}
      <UserAvatar
        size='lg'
        name={" "}
      />
      <br />
      {/* <SelectTimezone
        label='Timezone'
        helpText='This is the timezone for your account. To set the timezone for your Soppiya admin, go to the General section in settings.'

      /> */}
      <br />
      <Text>lorem ipsum</Text>
      <br />
      <Banner status='danger'>
        lorem
        <div>
          sfsdf
        </div>
        <div>
          <Button type='outline' variant='danger' loading={true} spinnerType='danger'> Button</Button>
        </div>
      </Banner>
      <br />
      <Button type="text" loading="loading">Test Button</Button>
      <br />

      <Card>
        <Card.Header padding="lg" border="bottom">Header</Card.Header>
        <Card.Body padding="md">Body</Card.Body>
        <Card.Footer padding="sm" border="top">Footer</Card.Footer>
      </Card>
      <br />
    </div>
  )
}
export default Test;