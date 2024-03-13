import React, { useEffect, useState } from "react";
import vankpaysecurity from "../../../../../../assets/Icon/Vankpaysecurity.png";
import vectorshare from "../../../../../../assets/Icon/Vectorshare.png";
import img from "../../../../../../assets/Icon/Vectorimg.png";
import QR from "../../../../../../assets/Icon/QR.png";
import copy from "../../../../../../assets/Icon/Iconcopy.png";
import CustomButton from "../../../../../Shared/CustomButton/CustomButton";
import { ShareCircle } from "../../../../../../assets/Icon/ShareCircle";
import Visibility from "../../../../../../assets/Icon/Visibility";
import whatsapp from "../../../../../../assets/Icon/WHATSAPP-ICON.png"
import email from "../../../../../../assets/Icon/GMAIL-ICON.png"
import image from "../../../../../../assets/Icon/JPG-ICON.png"
import { Close2 } from "../../../../../../assets/Icon/Close2";
import { IconCopy } from "../../../../../../assets/Icon/IconCopy";
import { ButtonCopy } from "../../shared/ButtonCopy/ButtonCopy";

export const Recieve = () => {
  // const {
  //   control,
  //   formState: { errors },
  // } = useForm({
  //   mode: "onChange",
  //   reValidateMode: "onChange",
  //   defaultValues: {
  //     email: "",
  //     VankId: "",
  //   },
  // });

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({email:'jheisonruapachon7_virtual@3acnd1hunoemail.com',id:'1234567'});

  useEffect(()=>{
    sessionStorage.setItem("data",JSON.stringify(data))
  },[])

  return (
    <div className="h-full flex flex-col justify-center max-2xl:h-[80%]">
      <div className="h-[324.33px] flex items-center gap-[30px] relative  pr-1 max-2xl:gap-2 ">
        <div className="w-[264px] h-[324.33px] flex flex-col gap-[16px] max-2xl:w-[50%] max-2xl:h-[70%] ">
          {/* <div className="w-[264px] h-[32.17px] flex justify-between">
            <div className="flex items-center gap-[4px] w-[155px]">
              <img src={vankpaysecurity} alt="" />
              <p className="font-[700] font-sanspp text-[14px] leading-[18.2px] text-[#EFF0F1] ">
                VanKPay QR
              </p>
            </div>

            <div className="flex items-center gap-[26px] w-[70px] h-[32px]">
              <img src={vectorshare} alt="" />
              <img src={img} alt="" />
            </div>
          </div> */}
          <div className="h-[276.17px]  max-2xl:h-[full] max-2xl:w-[full%]">
            <img src={QR} alt="" className="max-2xl:w-full max-2xl:h-full" />
          </div>
        </div>
        <div className="">
          <div className="w-[256px] h-[220px] flex flex-col justify-between ">
            <div className="w-[259px] flex flex-col gap-y-[2px] items-end ">
              <span className="text-sm sm:text-base font-normal text-[--text-body] border-b-[2px] border-[#3E4347] leading-[20.8px] text-body max-2xl:text-[15px]">
                User Email
              </span>
              <p className="flex items-center gap-2 max-2xl:text-[14px]"><input type="text" className="dark:bg-[#191E25]" value={data.email} disabled/> <Visibility/><ButtonCopy textCopy={data.email}/></p>
              
              {/* <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="max-2xl:w-[90%] w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["email"])}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    placeholder="Type email"
                  />
                )}
                name="email"
                control={control}
              /> */}
            </div>

            <div className="w-[259px] flex flex-col gap-y-[2px] items-end">
              <span className="text-sm sm:text-base font-normal text-[--text-body] border-b-[2px] border-[#3E4347] leading-[20.8px] text-body max-2xl:text-[14px]">
                Vank ID 
              </span>

              <p className="flex items-center gap-2 max-2xl:text-[14px]">{data.id}<Visibility/><ButtonCopy textCopy={data.id}/></p>
              {/* <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="max-2xl:w-[90%] w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["VankId"])}
                    helperText={
                      errors["VankId"] ? errors["VankId"].message : ""
                    }
                    placeholder="Type User ID"
                  />
                )}
                name="VankId"
                control={control}
              /> */}
            </div>

            <div className="w-[259px] flex flex-col gap-y-[2px] justify-end items-end pr-1">


              <CustomButton className="bg-[#FFED00] text-[#14181F] hover:bg-[#CFC53D] h-[36px] w-[160px] rounded-[50px] flex items-center justify-center py-[6px] group max-2xl:w-[50%]"
                onclick={() => setVisible(visible ? false : true)}
                label={<label className="flex gap-2 text-center w-[80%] text-[#14181F] font-normal leading-[20.8px] cursor-pointer max-2xl:text-[12px] items-center justify-center ">QR Sharing
                  <span className="flex items-center justify-center">
                    {visible ?
                      <Close2/>
                      :
                      <ShareCircle className={'group-hover:hidden'} />
                    }
                    <span className={`hidden ${visible ? 'hidden' : 'group-hover:block'}`}>{'\u25B2'}</span></span></label>} />

            </div>
          </div>

        </div>
        {visible &&
          <div className="bg-[#14181F] w-[396px] h-[259px] absolute -top-[0px] z-50 left-[50px] flex flex-col justify-centr items-center rounded-[32px] p-[24px]">
            
            <div className="w-full h-[21px]">
              <CustomButton onclick={()=>setVisible(false)} className="" label={'Back'}/>
            </div>
            <div className="h-[190px] w-[318px] flex flex-col items-center pt-[24px]  justify-between">

              <div className="w-full h-[78px] flex justify-between   items-center">
                <div className="flex flex-col-reverse items-center gap-[12px]">
                  <p className="peer text-[14px]">Whatsapp</p>
                  <div className="peer-hover:bg-[#5E6061] hover:bg-[#5E6061] rounded-full bg-[#3E4347] h-[48px] w-[48px] text-center flex items-center justify-center">
                      <img src={whatsapp}/>
                  </div>

                </div>

                <div className="flex flex-col-reverse items-center gap-[12px]">
                  <p className="peer text-[14px]">Gmail</p>
                  <div className="rounded-full bg-[#3E4347] hover:bg-[#5E6061] h-[48px] w-[48px] peer-hover:bg-[#5E6061] flex items-center justify-center">
                  <img src={email}/>
                  </div>
                </div>

                <div className="flex flex-col-reverse items-center gap-[12px]">
                  <p className="peer text-[14px]">Copy IMG</p>
                  <div className="rounded-full bg-[#3E4347] hover:bg-[#5E6061] h-[48px] w-[48px] peer-hover:bg-[#5E6061] flex items-center justify-center">
                  <img src={image}/>
                  </div>
                </div>
              </div>

                <div className="">
                  <CustomButton className="bg-[#3E4347] w-[134px] h-[36px] rounded-[50px] py-[6px] px-[18px] hover:bg-[#5E6061]"  label={<span className="flex">{'Copy Link'} <img src={copy} alt="" className="" /></span>}/>
                </div>
            </div>

          </div>
        }
      </div>
      {/* <div className="flex w-full h-[130px]  items-center  overflow-hidden justify-between ">
        
        <div className=" w-[70%] h-[61px] whitespace-nowrap flex flex-col   gap-[4px] ">
          
          <h1 className="font-bold leading-[20.8px]">Vank Account Address</h1>
          <p className="font-normal text-[14px] leading-[18.2px] w-[524px] h-[32px] xl:text-[12px]">
            fasdffw564f564s56f465ew4rt86er8t78e4t7er8g78f7ds <br />g89dsfgfds+f7dsg8a8dg+a+g+a
            8a8sfs
          </p>
        </div>
        
       

          <CustomButton className="bg-[#3E4347] rounded-[50px] h-[32px] w-[120px] flex items-center justify-center hover:bg-[#5E6061]" label={<span className="flex gap-2"><p className="">Copy </p> <img src={copy} alt="" className="" /></span>}/>
      
      </div> */}
    </div>
  );
};
