function CampaignAuthor({ src = "", name = "", className = "" }) {
    return (
        <div className={`flex items-center gap-x-2 ${className}`}>
            <img
                className="w-[30px] h-[30px] rounded-full"
                src={src}
                alt={name}
            />
            <p className="text-xs">
                <span className="text-text3">by</span>
                <strong className="font-semibold text-text2 ml-[6px]">
                    {name}
                </strong>
            </p>
        </div>
    );
}

export default CampaignAuthor;
