function CampaignMetaRow({ className, children }) {
    return (
        <div className={`flex justify-between ${className}`}>{children}</div>
    );
}

export default CampaignMetaRow;
