import Heading from "@/components/Heading";
import CampaignGrid from "../../components/CampaignGrid";
import CampaignCard from "../../components/CamPaignCard";
import { popularCampaigns, recentCampaigns } from "./data";
import Gap from "../../../../components/Gap30";
import CampaignHeader from "../../components/CampaignHeader";

function Dashboard() {
    return (
        <div>
            <Gap>
                <Heading>
                    Your Campaign <span className="text-secondary">(4)</span>
                </Heading>
                <CampaignHeader className="mt-4" />
            </Gap>
            <Gap>
                <Heading>Popular Campaign</Heading>
                <CampaignGrid className="mt-4">
                    {popularCampaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </CampaignGrid>
            </Gap>
            <Gap>
                <Heading>Recent Campaign</Heading>
                <CampaignGrid className="mt-4">
                    {recentCampaigns.map((campaign) => (
                        <CampaignCard key={campaign.id} campaign={campaign} />
                    ))}
                </CampaignGrid>
            </Gap>
        </div>
    );
}

export default Dashboard;
