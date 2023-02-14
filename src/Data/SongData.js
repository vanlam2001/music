import { v4 as uuidv4 } from "uuid";

const songData = [
    {
        title: "Jan Hammer",
        artist: "Crockett's Theme (Miami Vice)",
        coverUrl:
            "http://wallpaperstock.net/gta%3A-vice-city-stories_wallpapers_19186_1024x1024.jpg",
        thumbUrl:
            "https://i.rada.vn/data/image/2015/01/28/Vice-City-Patch-2.jpg",
        audio: "https://b.top4top.io/m_2601iii6v1.mp3",
        palette: "coral",
        id: uuidv4(),
    },
    {
        title: "寻水的鱼 ",
        artist: "Xu fei",
        coverUrl:
            "https://picx.zhimg.com/v2-184c08840e81df6de4d4ef5f89a15b36_720w.jpg?source=172ae18b",
        thumbUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Korean_music_Icon.svg/150px-Korean_music_Icon.svg.png",
        audio: "https://h.top4top.io/m_26019yhqd1.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
    {
        title: "Cherish",
        artist: "Kool & The Gang",
        coverUrl:
            "https://www.beach-backgrounds.com/wallpapers/orange-sunset-on-the-tropic-beach-background-1024x1024-174.jpg",
        thumbUrl:
            "https://www.puregrenada.com/wp-content/uploads/2020/03/Lassagess-beach-in-grenada-150x150.jpg",
        audio: "https://c.top4top.io/m_2601yxzzc1.mp3",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "More Than This",
        artist: "Roxy Music",
        coverUrl:
            "http://wallpaperstock.net/gta%3A-vice-city-stories_wallpapers_19185_1024x1024.jpg",
        thumbUrl:
            "https://io.getpedia.net/data/image/2016/01/09/Grand-Theft-Auto-Vice-City-Ultimate-Vice-City-logo150.png",
        audio: "https://b.top4top.io/m_260199e5k1.mp3",
        palette: "green",
        id: uuidv4(),
    },

    {
        title: "多餘的溫柔 | (DJ版)",
        artist: "小曼",
        coverUrl:
            "https://www.in2s.net/wp-content/uploads/2022/06/image-3-1024x1024.png",
        thumbUrl:
            "https://bostonese.com/wp-content/uploads/2014/08/2014_Acton_Chinese_Music_Dance7-150x150.jpg",
        audio: "https://l.top4top.io/m_26019aedb1.mp3",
        palette: "purple",
        id: uuidv4(),
    },
    {
        title: "Thời thơ ấu ",
        artist: "Sylvia Chang",
        coverUrl:
            "https://amazingthingsinvietnam.com/wp-content/uploads/2018/11/net-chan-que-moc-mac-noi-lang-que-ninh-binh-amazingthingsinvietnam-3-1024x1024.jpg",
        thumbUrl:
            "https://vnkings.com/wp-content/uploads/2017/06/canh-dieu-tuoi-tho-01-04-4--150x150.jpg",
        audio: "https://g.top4top.io/m_2313ibycq1.mp3",
        palette: "green",
        id: uuidv4(),
    },
    {
        title: "Поезд в Огне",
        artist: "Аквариум",
        coverUrl:
            "https://i0.wp.com/thekashmirimages.com/wp-content/uploads/2022/02/US-Over-130000-Russian-troops-now-staged-outside-Ukraine.jpg?fit=1024%2C1024&ssl=1",
        thumbUrl:
            "http://www.inach.net/wp-content/uploads/russia-flag-8x5-150x150.gif",
        audio: "https://h.top4top.io/m_2601of2xt1.mp3",
        palette: "blue",
        id: uuidv4(),
    },
    {
        title: "大约在冬季",
        artist: "齐秦",
        coverUrl:
            "https://c-cl.cdn.smule.com/smule-gg-uw1-s-7/arr/c0/0d/e5fe65a8-1d21-48b4-a643-3832155df95c_1024.jpg",
        thumbUrl:
            "data:image/jpeg;base64,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",
        audio: "https://d.top4top.io/m_2601utkb01.mp3",
        palette: "yellow",
        id: uuidv4(),
    },
];

export default songData;



