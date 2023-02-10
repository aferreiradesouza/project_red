export interface MenuProps {
    menu: Menu[];
}

export interface Menu {
    label: string;
    route: string;
}

export default function Menu({menu}: MenuProps) {
    return (
        <div className="menu">
            {menu.map(item => {
                return (
                    <div>{item.label}</div>
                )
            })}
        </div>
    )
}