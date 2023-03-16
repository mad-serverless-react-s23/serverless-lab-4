const people = [
    {
      name: 'Donna',
      favoriteNumber: 22,
      favoriteColor: ['Blue', 'White', 'Orange']
    },
    {
      name: 'Jake',
      favoriteNumber: 6,
      favoriteColor: ['Yellow']
    },
    {
      name: 'Alberto',
      favoriteNumber: 99,
      favoriteColor: ['Aquamarine', 'Fucsia']
    }
  ];
export const Greeting = () => (
    <>
        {people.map(x => (
            <div>
                <h3>Hello, {x.name}</h3>
                <p>{x.name}'s favorite number is {x.favoriteNumber}</p>
                <p>{x.name}'s favorite number plus 10 is {x.favoriteNumber + 10}</p>
                <p>{x.name}'s favorite color is 
                    <ul>
                        {x.favoriteColor.map((y, i) => y.i === 0 ? <li>None</li> : <li>{y.i}</li>)}
                    </ul>
                </p>
            </div>
        ))}
    </>
)