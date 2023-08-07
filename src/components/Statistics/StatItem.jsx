export const StatItem = ({stat: {label, percentage}}) => {
    return (
        <>
        <span className="label">{label}</span>
        <span className="percentage">{percentage}%</span>
        </>
    )
}