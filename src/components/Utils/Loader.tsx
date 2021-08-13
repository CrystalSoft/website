import Loader from 'react-loader-spinner'

const MyLoader = ({ className = 'loader' }: { className?: string }) => {
  return (
    <div className={className}>
      <Loader type='MutatingDots' color='#333' height={100} width={100} />
    </div>
  )
}

export default MyLoader
