import {h} from 'preact';
import * as s from "./homePageLayout.css"

export const HomePageLayout = (props) => {
    const {titleWithInput, cards} = props;
    return <main>
        {titleWithInput}
        <div className={s.cards}>
            {cards}
        </div>
    </main>;
}
