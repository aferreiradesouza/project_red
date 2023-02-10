export interface MenuProps {
    menu: Menu[];
    key: any;
}

export interface Menu {
    label: string;
    route: string;
}

export default function Menu({menu, key}: MenuProps) {
    return (
        <div className="menu">
            {menu.map(item => {
                return (
                    <div key={key}>{item.label}</div>
                )
            })}
        </div>
    )
}