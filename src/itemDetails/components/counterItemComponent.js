export const CounterItemComponent = (props) => (
    <div>
        <button onClick={() => props.actions.startCounting()}>start</button>
        <button onClick={() => props.actions.endCounting()}>end</button>
    </div>
)