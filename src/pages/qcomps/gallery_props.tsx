interface ProfileProps {
  name: string;
  img: string;
  profession: string;
  awards: Array<string>;
  discovered: string
}

function Profile({name, img, profession, awards, discovered}: ProfileProps) {
  return (
    <div>
      <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={img}
          alt={name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {profession}
          </li>
          <li>
            <b>Awards: {awards.length} </b>
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>
    </div>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name='Maria Skłodowska-Curie' 
        img='https://i.imgur.com/szV5sdGs.jpg' 
        profession='physicist and chemist' 
        awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
        discovered="polonium (element)"
      />
      <Profile 
        name='Katsuko Saruhashi' 
        img='https://i.imgur.com/YfeOqp2s.jpg' 
        profession='geochemist' 
        awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
        discovered="a method for measuring carbon dioxide in seawater"
      />
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src='https://i.imgur.com/YfeOqp2s.jpg'
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
