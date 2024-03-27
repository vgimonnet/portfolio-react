const Contact = () => {

  return (
    <section id="contact" className="h-full relative flex justify-around items-center flex-col">
      <h1 className="text-4xl font-bold">Contact</h1>

      <nav className="flex flex-row justify-center items-center gap-16 mt-16">
        <a href="https://www.linkedin.com/in/valentin-gimonnet-73133b182/" className="flex flex-col justify-center items-center gap-4 hover:cursor-pointer hover:underline transition-all duration-500" target="_blank">
          <svg height="64" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="64" data-view-component="true" fill='#FFFFFF'>
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
          </svg>
          <p>Github</p>
        </a>

        <a href="mailto:valentin.gimonnet18@gmail.com" className="flex flex-col justify-center items-center gap-4 hover:cursor-pointer hover:underline">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
          </svg>
          <p>Email</p>
        </a>

        <a href="https://github.com/vgimonnet" className="flex flex-col justify-center items-center gap-4 hover:cursor-pointer hover:underline" target="_blank">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/>
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
          </svg>
          <p>Linkedin</p>
        </a>
      </nav>

      <form action="" method="post"></form>

    </section>
  )
};

export default Contact;