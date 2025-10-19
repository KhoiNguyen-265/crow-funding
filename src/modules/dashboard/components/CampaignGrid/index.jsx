function CampaignGrid({ children, className }) {
    return (
        <div className={`grid grid-cols-4 gap-x-[30px] ${className}`}>
            {children}
        </div>
    );
}

export default CampaignGrid;
