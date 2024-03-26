const Footer = () => {

  return (
    <>
      <footer className="absolute bottom-0 left-0 right-0 m-auto">
        <div className="flex flex-row no-wrap border rounded  border-neutral-400 w-fit mx-auto my-8 px-4 py-2">
          <p>@ Valentin Gimonnet - { (new Date()).getFullYear() }</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;
