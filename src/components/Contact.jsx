import { Element } from "react-scroll";
function Contact(){
    return(
        <>
        <Element name="contact" data-scroll-to>
        <div className="contact" id="contact">
            <div className="contact_content">
                <div className="contact_content_left">
                <h2>Contact me</h2>
                <div className="underline"></div>
                    <div className="conact_content_left_entries">
                    <div className="contact_content_left_entry">
                        <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <div>Samundri,Faisalabad,Punjab,Pakistan</div>
                    </div>
                    <div className="contact_content_left_entry">
                        <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        </div>
                        <div>03377251311</div>
                    </div>
                    <div className="contact_content_left_entry">
                        <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        </div>
                        <div>momna533gb@gmail.com</div>
                    </div>
                    </div>
                </div>
                <div className="contact_content_right">
                <form action="">
                    <label htmlFor="name"></label>
                    <input id="name" type="text" placeholder="name" required  />
                    <label htmlFor="email"></label>
                    <input id="email" type="email" placeholder="email" required  />
                    <label htmlFor="msg"></label>
                    <textarea name="msg" id="msg" cols="30" rows="10" required placeholder="message"></textarea>
                    
                    <button type="submit">submit</button>
                </form>
                </div>
            </div>
        </div>
        </Element>
        
        </>
    )
}
export default Contact;