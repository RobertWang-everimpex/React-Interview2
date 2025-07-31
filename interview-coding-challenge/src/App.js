import './App.css'
import ProgressTimer from './ProgressTimer'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Progress Timer Challenge</h1>
        <p>Build a progress timer component below</p>
      </header>

      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', margin: '20px', borderRadius: '8px' }}>
        <h3>📹 Expected Behavior Demo</h3>
        <p>Watch this video to see what your component should do:</p>
        <div style={{ margin: '20px 0' }}>
          <video
            width="600"
            height="400"
            controls
            style={{ border: '1px solid #ddd', borderRadius: '8px' }}
          >
            <source src="/ProgressTimer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <main style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <ProgressTimer />
      </main>
    </div>
  )
}

export default App
