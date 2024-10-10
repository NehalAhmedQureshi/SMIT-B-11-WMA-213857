import { Button } from "antd";


export default function UserNotFound({message}) {
     return (
          <div className="main flex flex-col w-full justify-center items-center gap-8 pt-32">
               <div className="error text-red-500 text-2xl"> User Not Found</div>
               <div className="message text-slate-400">{message}</div>
               <Button as="Link" href="/auth/" > Sign In </Button>
          </div>
     );
}
