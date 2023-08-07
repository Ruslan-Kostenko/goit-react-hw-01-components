import { StatItem } from "./StatItem";
import { StatTitle } from "./StatTitle";

export const Statistics = ({title, stats}) => {
    return (
        <section className="statistics">
            <StatTitle title={title}/>

            <ul className="stat-list">
            {stats.map(stat => (
                <li className="item" key={stat.id}>
                    <StatItem stat={stat} />
                </li>))}
            </ul>
        </section>
    )
};