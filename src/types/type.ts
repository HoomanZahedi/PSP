import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { AxiosResponse } from "axios";

export type Post= {
    userId: number,
    id: number,
    title: string
    body: string
}

export enum Role{
    user = 1,
    admin = 2
}

export type DrawerBtn={
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    name:string;
}
export type GetPostsType = () => Promise<AxiosResponse<Post[]>>;
export type GetSinglePostType = (arg:number) => Promise<AxiosResponse<Post>>;