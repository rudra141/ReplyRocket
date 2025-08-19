
'use client';

export default function ProductDemoSection() {
    return (
        <section id="demo" className="py-16 md:py-24 bg-transparent">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
                        See ReplyRocket in Action
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-gray-400">
                        Watch this short demo to see how you can generate powerful outreach messages in seconds.
                    </p>
                </div>
                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="aspect-video overflow-hidden rounded-2xl border-4 border-gray-700/50 shadow-2xl shadow-black/50">
                        <iframe
                            src="https://player.vimeo.com/video/1111268877"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="ReplyRocket Demo"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
