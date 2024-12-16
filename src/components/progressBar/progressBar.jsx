import './progressBar.css'

function ProgressBar({ currentValue}) {
    const maxValue = 100
    const percentage = (currentValue / maxValue) * 100;
  
    return (
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        >
          {percentage.toFixed(0)}%
        </div>
      </div>
    );
  }

export default ProgressBar;