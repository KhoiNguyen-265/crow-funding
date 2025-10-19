import Heading from "@/components/Heading";
import CampaignCategory from "../CampaignCategory";
import CampaignImage from "../CampaignImage";
import { campaignHeader_01 } from "@/assets/images";
import CampaignDesc from "../CampaignDesc";
import CampaignMetaRow from "../CampaignMetaRow";
import CampaignMeta from "../CampaignMeta";

function CampaignHeader({ className }) {
    return (
        <div
            className={`flex items-center gap-x-[30px] max-w-[1048px] ${className}`}
        >
            <CampaignImage
                src={campaignHeader_01}
                className="w-[56%] max-h-[300px] rounded-3xl"
            />
            <div>
                <CampaignCategory size="large">Architecture</CampaignCategory>
                <Heading as="h1" variant="h1" className="mt-4">
                    Remake - We Make architecture exhibition
                </Heading>
                <CampaignDesc className="text-xs lg:text-sm line-clamp-2">
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </CampaignDesc>
                <div className="w-full h-[5px] rounded-full bg-[#efefef] mt-4">
                    <div className="bg-primary w-[80%] h-[inherit] rounded-[inherit]"></div>
                </div>
                <CampaignMetaRow className="mt-4">
                    <CampaignMeta
                        size="large"
                        quantity="$2000"
                        desc="Raised of $2,500"
                    />
                    <CampaignMeta
                        size="large"
                        quantity="173"
                        desc="Total backers"
                    />
                    <CampaignMeta size="large" quantity="30" desc="Days left" />
                </CampaignMetaRow>
            </div>
        </div>
    );
}

export default CampaignHeader;
