import Card from "./components/Card";

const App = () => {
  let cardInfo = [
    {
      name: "Dev",
      desc: "I am a full stack-developer",
      image: "https://images.unsplash.com/photo-1745282480794-10427e218c76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "danger"
    },
    {
      name: "Kaushal Varma",
      desc: "I am a  Frontend developer",
      image: "https://images.unsplash.com/photo-1746713915201-4eed01ca887a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "success"
    },
    {
      name: "Dev",
      desc: "I am a Backend developer",
      image: "https://images.unsplash.com/photo-1743315713979-b46562f5f14e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "primary"
    }
  ]

  return (
    <section className="py-5">
      <div className="container">
        <div className="row gy-4">
          {cardInfo.map(obj => {
            return<Card title={obj.name} desc={obj.desc} image={obj.image} color={obj.color} />
          })}
        </div>
      </div>
    </section>
  )
}

export default App;