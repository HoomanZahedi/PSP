import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { AxiosResponse } from "axios";

export type Post= {
    userId: number,
    id: number,
    title: string
    body: string
}

export type DrawerBtn={
    icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    name:string;
}
export type GetPostsType = () => Promise<AxiosResponse<Post[]>>;