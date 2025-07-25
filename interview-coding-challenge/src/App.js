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
        <div style={{ fontSize: '14px', color: '#666' }}>
          <strong>Key features to implement:</strong>
          <ul style={{ textAlign: 'left', margin: '10px 0' }}>
            <li>Input field for timer duration (seconds)</li>
            <li>Start button to begin countdown</li>
            <li>Text-based progress bar: <code>[####------]</code></li>
            <li>Live countdown display</li>
            <li>Reset button to clear everything</li>
            <li>"Timer finished!" message when complete</li>
          </ul>
        </div>
      </div>

      <main style={{ padding: '40px', display: 'flex', justifyContent: 'center' }}>
        <ProgressTimer />
      </main>
    </div>
  )
}

export default App
