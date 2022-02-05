import { BiLogIn } from "react-icons/bi";
import MenuItem from "./MenuItem";

export default function MenuFooter() {
    return (
        <>
            <div className="mt-7">
                <MenuItem icon={<BiLogIn />} name="Sair" />
            </div>
            <div className="mt-7">
                <a
                    target="_blank"
                    rel="noreferrer"
                    className='underline text-slate-400'
                    href='https://www.figma.com/community/file/1042024350599049662'
                >
                    Design by CupTeam
                </a>
            </div>
        </>
    );
}