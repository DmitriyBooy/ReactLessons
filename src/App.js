import './App.css'

const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png'/>
      </header>

      <nav className='nav'>
        <div>
          <a>
            Profile
          </a>
        </div>
        <div>
          <a>
            Messages
          </a>
        </div>
        <div>
          <a>
            News
          </a>
        </div>
        <div>
          <a>
            Music
          </a>
        </div>
        <div>
          <a>
            Settings
          </a>
        </div>
      </nav>

      <div className='content'>
        <div>
          <img src="https://images.freeimages.com/images/previews/ac9/railway-hdr-1361893.jpg" />
        </div>

        <div>
          https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png
          ava + description
        </div>

        <div>
          Posts

          <div>
            new post
          </div>

          <div>
            post 1
          </div>

          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
