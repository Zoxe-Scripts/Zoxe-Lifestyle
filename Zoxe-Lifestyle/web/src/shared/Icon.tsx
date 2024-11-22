import React from "react";

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as CiIcons from 'react-icons/ci';
import * as CgIcons from 'react-icons/cg';
import * as DiIcons from 'react-icons/di';
import * as FiIcons from 'react-icons/fi';
import * as FcIcons from 'react-icons/fc';
import * as FaIcons from 'react-icons/fa';
import * as Fa6Icons from 'react-icons/fa6';
import * as GiIcons from 'react-icons/gi';
import * as GoIcons from 'react-icons/go';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';
import * as Hi2Icons from 'react-icons/hi2';
import * as ImIcons from 'react-icons/im';
import * as IaIcons from 'react-icons/lia';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as LuIcons from 'react-icons/lu';
import * as MdIcons from 'react-icons/md';
import * as PhIcons from 'react-icons/pi';
import * as RxIcons from 'react-icons/rx';
import * as RiIcons from 'react-icons/ri';
import * as SiIcons from 'react-icons/si';
import * as SlIcons from 'react-icons/sl';
import * as TbIcons from 'react-icons/tb';
import * as TiIcons from 'react-icons/ti';
import * as VscIcons from 'react-icons/vsc';
import * as WiIcons from 'react-icons/wi';

type IconLibrary = {
    [key: string]: React.ComponentType<any>;
};

const IconLibraries: Record<string, IconLibrary> = {
    ai: AiIcons,
    bs: BsIcons,
    bi: BiIcons,
    ci: CiIcons,
    cg: CgIcons,
    di: DiIcons,
    fi: FiIcons,
    fc: FcIcons,
    fa: FaIcons,
    fa6: Fa6Icons,
    gi: GiIcons,
    go: GoIcons,
    gr: GrIcons,
    hi: HiIcons,
    hi2: Hi2Icons,
    im: ImIcons,
    ia: IaIcons,
    io: IoIcons,
    io5: Io5Icons,
    lu: LuIcons,
    md: MdIcons,
    ph: PhIcons,
    rx: RxIcons,
    ri: RiIcons,
    si: SiIcons,
    sl: SlIcons,
    tb: TbIcons,
    ti: TiIcons,
    vsc: VscIcons,
    wi: WiIcons,
};

type IconLibraryKey = keyof typeof IconLibraries;

interface IconProps {
    Lib: IconLibraryKey;
    Name: string;
    Size?: string | number;
    Style?: React.CSSProperties;
    OnClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ Lib, Name, Size, Style, OnClick }) => {
    const IconLibrary = IconLibraries[Lib];
    const IconComponent = IconLibrary[Name as keyof IconLibrary] || FaIcons.FaQuestionCircle;

    return <IconComponent size={Size || 32} style={Style} onClick={OnClick} />;
};

export default Icon;