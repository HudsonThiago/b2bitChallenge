interface LoginDTO {
    email:string;
    password:string;
}

interface AvatarInterface {
    id:number
    low:string
    medium:string
    high:string
}
  
interface UserInterface {
    avatar:AvatarInterface;
    email:string;
    is_active:boolean;
    name:string;
    role:string;
    type:string;
}

  