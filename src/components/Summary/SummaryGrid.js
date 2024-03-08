export default function SummaryGrid({accuracyArray}) {
    const gridStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
      }

    function renderBox(backgroundColor) {
        return (
            <div 
                style={{
                    border: '1px solid black', 
                    height: 100, 
                    width: 100, 
                    backgroundColor
                }}
            />
        )
    }
      return (
        <div>
            <div style={gridStyles}>
            <div>
                {renderBox(accuracyArray[0])}
                {renderBox(accuracyArray[1])}
                {renderBox(accuracyArray[2])}
            </div>
            <div>
                {renderBox(accuracyArray[3])}
                {renderBox(accuracyArray[4])}
                {renderBox(accuracyArray[5])}
            </div>
            <div>
                {renderBox(accuracyArray[6])}
                {renderBox(accuracyArray[7])}
                {renderBox(accuracyArray[8])}
            </div>
            </div>
        </div>
    )
}