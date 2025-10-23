import { Link } from "react-router-dom";
import { PlusIcon } from "../../../../assets/icons";
import CampaignDesc from "../../../../components/CampaignDesc";
import Button from "@/components/Button";
import Gap from "../../../../components/Gap30";
import Heading from "@/components/Heading";
import CampaignHeader from "../../../../components/CampaignHeader";

function Campaign() {
    return (
        <>
            {/* Create Your Campaign */}
            <div className="flex items-center justify-between px-10 py-8 rounded-3xl bg-white">
                <div className="flex gap-x-6">
                    <div className="flex items-center justify-center w-[54px] h-[54px] rounded-full bg-secondary/60 text-white cursor-pointer hover:bg-secondary transition-all duration-300">
                        <PlusIcon />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-semibold text-text1 text-sm lg:text-[22px] ">
                            Create Your Campaign
                        </h2>
                        <CampaignDesc className="lg:text-sm text-xs">
                            Jump right into our editor and create your first
                            Virtue campaign!
                        </CampaignDesc>
                        <Link
                            className="text-xs lg:text-sm text-primary"
                            to="/campaign-add-new"
                        >
                            Need any help? Learn More...
                        </Link>
                    </div>
                </div>
                <Button variant="outlineSecondary">
                    <span>Create campaign</span>
                </Button>
            </div>

            {/* Your Campaign */}
            <Gap>
                <Heading>Your Campaign</Heading>
                <div className="grid grid-cols-1 mt-4 gap-y-10">
                    <CampaignHeader />
                    <CampaignHeader />
                    <CampaignHeader />
                </div>
                <Gap className="flex justify-center">
                    <Button variant="outlineSecondary">See more+</Button>
                </Gap>
            </Gap>
            <Gap>
                <Heading>Pending Campaign</Heading>
                <div className="grid grid-cols-1 mt-4 gap-y-10">
                    <CampaignHeader />
                    <CampaignHeader />
                    <CampaignHeader />
                </div>
                <Gap className="flex justify-center">
                    <Button variant="outlineSecondary">See more+</Button>
                </Gap>
            </Gap>
        </>
    );
}

export default Campaign;
