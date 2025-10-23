import Heading from "@/components/Heading";
import CampaignImage from "../CampaignImage";
import CampaignCategory from "../CampaignCategory";
import CampaignDesc from "../../../../components/CampaignDesc";
import CampaignMeta from "../CampaignMeta";
import CampaignMetaRow from "../CampaignMetaRow";
import CampaignAuthor from "../CampaignAuthor";

function CampaignCard({ campaign = {}, className = "", id = "" }) {
    return (
        <div
            className={`flex flex-col bg-white dark:bg-dark-secondary rounded-[15px] shadow-shadowMain ${className}`}
            key={id}
        >
            <CampaignImage
                src={campaign.image}
                className="h-[158px] rounded-[inherit]"
            />
            <div className="flex flex-col flex-1 py-[15px] px-6">
                <CampaignCategory>
                    <p>{campaign.category}</p>
                </CampaignCategory>
                <Heading as="h3" variant="h3" className="mt-4">
                    {campaign.title}
                </Heading>

                <CampaignDesc className="text-xs mt-2 leading-[18px] min-h-9 line-clamp-2">
                    {campaign.description}
                </CampaignDesc>

                <CampaignMetaRow className="mt-4">
                    <CampaignMeta
                        quantity={campaign.raised}
                        desc={campaign.goal}
                    />
                    <CampaignMeta
                        quantity={campaign.backers}
                        desc={campaign.backersDesc}
                    />
                </CampaignMetaRow>

                <CampaignAuthor
                    className="mt-4"
                    name={campaign.author?.name}
                    src={campaign.author?.avatar}
                />
            </div>
        </div>
    );
}

export default CampaignCard;
