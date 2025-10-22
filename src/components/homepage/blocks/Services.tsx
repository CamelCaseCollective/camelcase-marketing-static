import { Container } from '@/components/Container'
import React from 'react'

function Services() {
  return (
    <Container className="my-20">
        <div>
            <div className="text-center max-w-5xl mx-auto">
                <h2 className="mb-4">Our Services</h2>
                <p>We build content-first websites and publishing platforms that scale. From stable back-end systems to seamless front-end experiences, we connect newsletters, syndication feeds, and metadata pipelines—so your team can focus on publishing, not firefighting.</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
                {/* TODO: Move icons to include or install fa icons */}
                {/* https://docs.fontawesome.com/web/use-with/react/add-icons */}
                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M392.8 65.2C375.8 60.3 358.1 70.2 353.2 87.2L225.2 535.2C220.3 552.2 230.2 569.9 247.2 574.8C264.2 579.7 281.9 569.8 286.8 552.8L414.8 104.8C419.7 87.8 409.8 70.1 392.8 65.2zM457.4 201.3C444.9 213.8 444.9 234.1 457.4 246.6L530.8 320L457.4 393.4C444.9 405.9 444.9 426.2 457.4 438.7C469.9 451.2 490.2 451.2 502.7 438.7L598.7 342.7C611.2 330.2 611.2 309.9 598.7 297.4L502.7 201.4C490.2 188.9 469.9 188.9 457.4 201.4zM182.7 201.3C170.2 188.8 149.9 188.8 137.4 201.3L41.4 297.3C28.9 309.8 28.9 330.1 41.4 342.6L137.4 438.6C149.9 451.1 170.2 451.1 182.7 438.6C195.2 426.1 195.2 405.8 182.7 393.3L109.3 320L182.6 246.6C195.1 234.1 195.1 213.8 182.6 201.3z"/></svg>
                    <h3>Development</h3>
                    <p>Full-stack engineering for media platforms — from fast, responsive frontends to scalable backend systems built to handle millions of readers.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M296.5 69.2C311.4 62.3 328.6 62.3 343.5 69.2L562.1 170.2C570.6 174.1 576 182.6 576 192C576 201.4 570.6 209.9 562.1 213.8L343.5 314.8C328.6 321.7 311.4 321.7 296.5 314.8L77.9 213.8C69.4 209.8 64 201.3 64 192C64 182.7 69.4 174.1 77.9 170.2L296.5 69.2zM112.1 282.4L276.4 358.3C304.1 371.1 336 371.1 363.7 358.3L528 282.4L562.1 298.2C570.6 302.1 576 310.6 576 320C576 329.4 570.6 337.9 562.1 341.8L343.5 442.8C328.6 449.7 311.4 449.7 296.5 442.8L77.9 341.8C69.4 337.8 64 329.3 64 320C64 310.7 69.4 302.1 77.9 298.2L112 282.4zM77.9 426.2L112 410.4L276.3 486.3C304 499.1 335.9 499.1 363.6 486.3L527.9 410.4L562 426.2C570.5 430.1 575.9 438.6 575.9 448C575.9 457.4 570.5 465.9 562 469.8L343.4 570.8C328.5 577.7 311.3 577.7 296.4 570.8L77.9 469.8C69.4 465.8 64 457.3 64 448C64 438.7 69.4 430.1 77.9 426.2z"/></svg>
                    <h3>CMS Migrations & Full Website Builds</h3>
                    <p>We plan and execute seamless migrations and rebuilds, modernizing legacy sites without disrupting publishing workflows or ad revenue.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M344 170.6C362.9 161.6 376 142.3 376 120C376 89.1 350.9 64 320 64C289.1 64 264 89.1 264 120C264 142.3 277.1 161.6 296 170.6L296 269.4C293.2 270.7 290.5 272.3 288 274.1L207.9 228.3C209.5 207.5 199.3 186.7 180 175.5C153.2 160 119 169.2 103.5 196C88 222.8 97.2 257 124 272.5C125.3 273.3 126.6 274 128 274.6L128 365.4C126.7 366 125.3 366.7 124 367.5C97.2 383 88 417.2 103.5 444C119 470.8 153.2 480 180 464.5C199.3 453.4 209.4 432.5 207.8 411.7L258.3 382.8C246.8 371.6 238.4 357.2 234.5 341.1L184 370.1C181.4 368.3 178.8 366.8 176 365.4L176 274.6C178.8 273.3 181.5 271.7 184 269.9L264.1 315.7C264 317.1 263.9 318.5 263.9 320C263.9 342.3 277 361.6 295.9 370.6L295.9 469.4C277 478.4 263.9 497.7 263.9 520C263.9 550.9 289 576 319.9 576C350.8 576 375.9 550.9 375.9 520C375.9 497.7 362.8 478.4 343.9 469.4L343.9 370.6C346.7 369.3 349.4 367.7 351.9 365.9L432 411.7C430.4 432.5 440.6 453.3 459.8 464.5C486.6 480 520.8 470.8 536.3 444C551.8 417.2 542.6 383 515.8 367.5C514.5 366.7 513.1 366 511.8 365.4L511.8 274.6C513.2 274 514.5 273.3 515.8 272.5C542.6 257 551.8 222.8 536.3 196C520.8 169.2 486.8 160 460 175.5C440.7 186.6 430.6 207.5 432.2 228.3L381.6 257.2C393.1 268.4 401.5 282.8 405.4 298.9L456 269.9C458.6 271.7 461.2 273.2 464 274.6L464 365.4C461.2 366.7 458.5 368.3 456 370L375.9 324.2C376 322.8 376.1 321.4 376.1 319.9C376.1 297.6 363 278.3 344.1 269.3L344.1 170.5z"/></svg>
                    <h3>API Integrations & Middleware</h3>
                    <p>Connect editorial tools, analytics, and ad tech with custom middleware and API integrations that streamline your publishing stack.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M64 480L64 184C64 170.7 74.7 160 88 160C101.3 160 112 170.7 112 184L112 472C112 485.3 122.7 496 136 496C149.3 496 160 485.3 160 472L160 160C160 124.7 188.7 96 224 96L512 96C547.3 96 576 124.7 576 160L576 480C576 515.3 547.3 544 512 544L128 544C92.7 544 64 515.3 64 480zM224 192L224 256C224 273.7 238.3 288 256 288L320 288C337.7 288 352 273.7 352 256L352 192C352 174.3 337.7 160 320 160L256 160C238.3 160 224 174.3 224 192zM248 432C234.7 432 224 442.7 224 456C224 469.3 234.7 480 248 480L488 480C501.3 480 512 469.3 512 456C512 442.7 501.3 432 488 432L248 432zM224 360C224 373.3 234.7 384 248 384L488 384C501.3 384 512 373.3 512 360C512 346.7 501.3 336 488 336L248 336C234.7 336 224 346.7 224 360zM424 240C410.7 240 400 250.7 400 264C400 277.3 410.7 288 424 288L488 288C501.3 288 512 277.3 512 264C512 250.7 501.3 240 488 240L424 240z"/></svg>
                    <h3>Newsletter & ESP Integrations</h3>
                    <p>Unify your audience strategy with tailored newsletter systems and ESP integrations that boost engagement and deliverability.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 128C96 110.3 110.3 96 128 96C357.8 96 544 282.2 544 512C544 529.7 529.7 544 512 544C494.3 544 480 529.7 480 512C480 317.6 322.4 160 128 160C110.3 160 96 145.7 96 128zM96 480C96 444.7 124.7 416 160 416C195.3 416 224 444.7 224 480C224 515.3 195.3 544 160 544C124.7 544 96 515.3 96 480zM128 224C287.1 224 416 352.9 416 512C416 529.7 401.7 544 384 544C366.3 544 352 529.7 352 512C352 388.3 251.7 288 128 288C110.3 288 96 273.7 96 256C96 238.3 110.3 224 128 224z"/></svg>
                    <h3>RSS, AI Licensing, & Syndication Feeds</h3>
                    <p>Power content distribution with reliable, flexible feeds — from traditional RSS to modern syndication and AI content licensing pipelines.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <svg className="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M310.6 194.3L243.4 222.5L243.4 107.2L188.7 297.5L243.4 273.3L243.4 403.6L310.6 194.3zM227.4 97.6L226.1 102.3L210.9 155.2C170.6 170.7 142 209.8 142 255.5C142 307.8 176.3 351.4 225.4 361L225.4 414.6C147.5 404.1 90 336.4 90 255.6C90 175.1 149.8 108.4 227.4 97.6zM538.8 544.8C527.6 556 515.7 557.1 510.2 555.3C504.8 553.5 483.1 535.4 449.8 510.9C416.5 486.3 416.2 475.2 406.8 454.2C397.4 433.3 376.4 411.6 349.3 401.8L339.6 387.1C314.9 404 286.6 414 258.3 415.8L260.4 409.2L276.3 359.7C322.8 347.8 357.2 305.7 357.2 255.5C357.2 201 318.8 153.4 261.2 148.4L261.2 96.3C344.4 101.4 410 170.8 410 255.6C410 289.2 398.8 320.3 381 346L395.6 355.6C405.4 382.7 427.1 403.6 448 413C468.9 422.4 480.2 422.7 504.8 456C529.4 489.2 547.5 510.9 549.3 516.3C551.1 521.7 550 533.6 538.8 544.8zM528.9 526.9C528.9 522.5 525.3 518.9 520.9 518.9C516.5 518.9 512.9 522.5 512.9 526.9C512.9 531.3 516.5 534.9 520.9 534.9C525.3 534.9 528.9 531.3 528.9 526.9z"/></svg>
                    <h3>SEO & Metadata Optimization</h3>
                    <p>Optimize your site architecture, metadata, and structured data to improve discoverability, boost rankings, and strengthen audience reach.</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Services