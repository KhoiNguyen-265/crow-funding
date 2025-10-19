import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Search from "../Seach";
import avatar from "@/assets/images/user-avatar.jpg";
import { UpIcon, ArrowDownIcon } from "@/assets/icons";

function DefaultTopBar() {
    return (
        <div className="sticky z-50 -top-3 flex items-center bg-orange-50 px-[50px] pt-5 pb-2">
            <Logo />
            <Search />
            <div className="flex items-center gap-x-10 ml-auto cursor-pointer">
                <div className="flex items-center gap-x-1">
                    <UpIcon />
                    <span className="font-semibold text-text2">
                        Fundraising for
                    </span>
                    <ArrowDownIcon />
                </div>
                <Button variant="secondary">Start a campaign</Button>
                <div className="cursor-pointer w-[52px] h-[52px] rounded-full overflow-hidden">
                    <img src={avatar} alt="" />
                </div>
            </div>
        </div>
    );
}

export default DefaultTopBar;
