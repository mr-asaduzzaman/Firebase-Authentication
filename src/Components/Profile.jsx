import React from 'react';

const Profile = () => {
    const profile = {
        image: 'https://randomuser.me/api/portraits/men/36.jpg',
        name: 'John Doe',
        role: 'Software Engineer',
        bio: 'Passionate about creating innovative software solutions. Enjoys exploring new technologies and continuously improving skills in web development.',
        social: {
            linkedin: 'https://linkedin.com/in/johndoe',
            github: 'https://github.com/johndoe',
            twitter: 'https://twitter.com/johndoe'
        }
    };

    return (
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 text-center">
            <img
                src={profile.image}
                alt={profile.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-gray-200"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
            <p className="text-gray-500">{profile.role}</p>
            <p className="text-gray-600 mt-3">{profile.bio}</p>

            <div className="flex justify-center gap-4 mt-4">
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M4 4h16v16H4z" fill="none" />
                        <path d="M7 6h2v12H7zm1-3a1.3 1.3 0 0 0-1 1.3c0 .7.3 1 1 1 .7 0 1-.3 1-1s-.3-1-1-1zm4 3h2v1h.1c.2-.3 1.5-1 3.2-1 3.4 0 4.7 2.2 4.7 5.5V18h-2v-4c0-1.7-.3-3.5-2.3-3.5-1.7 0-2.4 1.3-2.4 2.7v4.8h-2z" />
                    </svg>
                </a>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1 1.9-.8 1.9-.8.8-1.3.4-2.4 0-2.6-.9-1-.3-2 .1-2 .4 0 1 .5 1.4.7.4.2.9.4 1.4.2.4 0 1.2-.1 1.4-.2 1.5-.2 2.8-1.5 2.8-2.8 0-1.3-.9-2.4-2.2-2.7.3-.1.5-.2.8-.2h.8c0-1.2-.8-2.3-2-2.6.5-.1.9-.3 1.3-.6s.5-.9.5-1.3c0-.7-.2-1.3-.5-1.8-.6-.3-1.4-.3-2-.1-.4-.2-1.4-.1-2.2-.1-.4-.3-1-.5-1.8-.5-2 .3-3.5 1.5-4.2 2.9-.6 1.5-.3 3.3 1.1 4.1.8.4 1.4.2 2.3-.1 1.2.4 2.5-.2 3.6-1.2.3-.2.5-.4.8-.7s.4-.7.7-.8c.5-.2 1.1-.4 1.7-.4h1c.8-.5 1.8-.8 2.7-.8 2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4c.6 0 1.1.1 1.6.2.7-.7 1.4-1.1 2.4-1.3.7-.1 1.5-.2 2.2.1.5-.4.7-1.1.6-1.6-.4-.6-.6-1.2-.7-1.7-.2-.5-.5-.8-.8-1.1-.3-.3-.6-.7-.8-1.1-.2-.3-.5-.6-.7-.9-.2-.2-.5-.3-.8-.4-.2-.1-.5-.1-.7 0-.5.2-.9.4-1.3.6-.4.2-.8.4-1.2.6s-.7.3-1.1.5-.8.3-1.1.5-.5.2-.7.4c-.3.2-.5.4-.7.7-.1.1-.2.3-.3.4-.1.1-.2.3-.3.4s-.1.3-.2.5-.1.3-.2.5 0 .2 0 .3 0 .2 0 .3 0 .2 0 .3-.1.2 0 .3-.1.3 0 .4-.1.2-.2.3s-.2.4-.4.5-.2.1-.3.3-.5.7-.5.7-.3.1-.6.1z" />
                    </svg>
                </a>
                <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
                    <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M23.643 4.937c-.835.37-1.736.62-2.675.733a4.666 4.666 0 0 0 2.054-2.574 9.186 9.186 0 0 1-2.951 1.13 4.639 4.639 0 0 0-7.894 4.222A13.18 13.18 0 0 1 1.671 3.149 4.643 4.643 0 0 0 3.029 9.86a4.645 4.645 0 0 1-2.1-.575v.06a4.641 4.641 0 0 0 3.715 4.547 4.635 4.635 0 0 1-2.096.08 4.643 4.643 0 0 0 4.336 3.223A9.304 9.304 0 0 1 .654 19.7a13.144 13.144 0 0 0 7.115 2.084c8.54 0 13.203-7.086 13.203-13.229 0-.202-.004-.403-.014-.604A9.388 9.388 0 0 0 24 4.553a9.185 9.185 0 0 1-2.651.726 4.633 4.633 0 0 0 2.038-2.542" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Profile;
