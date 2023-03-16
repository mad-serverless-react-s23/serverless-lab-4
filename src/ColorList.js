export const ColorList = ({ colors }) => colors.length > 0 ? colors.map(y => (
    <li>{y}</li>
)) : <li>None</li>;