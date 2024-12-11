import React from "react";

const Contact = () => {
  return (
    <div className="m-auto min-w-[300px] max-w-4xl p-6 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Contactez-nous</h1>
      <p className="mb-4">
        Pour toute question ou demande d'information, n'hésitez pas à nous contacter via le formulaire ci-dessous ou à nous écrire directement à notre adresse email.
      </p>
      <form
        action="#"
        method="POST"
        className="flex flex-col gap-4"
      >
        <label htmlFor="name" className="block text-sm font-medium">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
        >
          Envoyer
        </button>
      </form>
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Adresse</h2>
        <p>123 Rue de la Mode, 75001 Paris, France</p>
        <p>Email: contact@nikea.fr</p>
        <p>Téléphone: +33 1 23 45 67 89</p>
      </div>
    </div>
  );
};

export default Contact;
