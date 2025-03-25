import TextDemo from "../components/text-animations/TextDemo/TextDemo";
import TextInfinityOpacityDemo from "../components/text-animations/TextInfinityOpacityDemo/TextInfinityOpacityDemo";
import TextScrollDemo from "../components/text-animations/TextScrollDemo/TextScrollDemo";
import TextScrollPerWordDemo from "../components/text-animations/TextScrollPerWordDemo/TextScrollPerWordDemo";

export default function Home() {
    return (
        <div>
            {/* <TextDemo /> */}
            {/* <TextScrollDemo /> */}
            {/* <TextScrollPerWordDemo/> */}
            <TextInfinityOpacityDemo/>
        </div>
    );
}
