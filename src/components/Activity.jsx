import "./components.css";

const Activity = ({ activity }) => {
    const { username, title, activityType, date } = activity;

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    };

    const actionText = activityType === "watch later"
        ? "added"
        : "favorited";

    const actionSuffix = activityType === "watch later"
        ? "to watch later"
        : "as a favorite";

    return (
        <li className="activity">
            <p>
                <span className="activity-username">{username}</span>
                {` ${actionText} `}
                <span className="activity-title">{title}</span>
                {` ${actionSuffix} - ${formatDate(date)}`}
            </p>
        </li>
    );
};

export default Activity;
