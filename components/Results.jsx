
import Thumbnail from './Thumbnail';


function Results({ results }) {
    return (
        <div>
            <div>
                {results.map(result => (
                    <Thumbnail key={result.id} result={result} />
                ))}
            </div>
        </div>
    )
}

export default Results
