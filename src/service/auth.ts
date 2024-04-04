import { axiosservice } from "../config/axiosconfig";
import { IUserLogin, IUserRegister } from "../type/user";

export const UserRegister = async (datauser: IUserRegister) => {
  try {
    // const {data} = await axiosservice.post(`/register`,datauser)
    const { data } = await axiosservice.post(`/register`, datauser);
    // console.log(data);
    return data;
  } catch (error) {
    // console.log(error);
    return null;
  }
};
export const UserLogin = async (datauser: IUserLogin) => {
  try {
    const { data } = await axiosservice.post(`/login`, datauser);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
