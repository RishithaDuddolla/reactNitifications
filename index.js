const Notification = props => {
  const notify = {props}
  return (
    <div className='bgr'>
      <>
        <img src={src} className='img' />
        <p className='p'>{notify}</p>
      </>
    </div>
  )
}

const Element = (
  <div className='bg'>
    <h1 class='heading'>Notifications</h1>
    <Notification
      className='Blue'
      notify='Information Message'
      src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
    />
    <Notification
      className='green'
      notify='Success Message'
      src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
    />
    <Notification
      className='yellow'
      notify='Warning Message'
      src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
    />
    <Notification
      className='red'
      notify='Error Message'
      src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
    />
  </div>
)

ReactDOM.render(Element, document.getElementById('root'))
