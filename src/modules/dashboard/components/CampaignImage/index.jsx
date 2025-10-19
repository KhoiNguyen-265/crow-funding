function CampaignImage({ src, className }) {
    return (
        <div className={`${className}`}>
            <img
                src={src}
                alt=""
                className="w-full h-full max-h-[inherit] object-cover rounded-[inherit]"
            />
        </div>
    );
}

export default CampaignImage;
