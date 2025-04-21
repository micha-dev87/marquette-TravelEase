import React, { useState } from 'react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: 'user' | 'admin';
}

const ProfilePage: React.FC = () => {
  // État pour l'utilisateur (à remplacer par une connexion réelle)
  const [user, setUser] = useState<UserProfile>({
    firstName: 'Jean',
    lastName: 'Dupont',
    email: 'jean.dupont@example.com',
    role: 'user'
  });

  // État pour gérer le formulaire
  const [formData, setFormData] = useState<UserProfile>(user);
  const [isEditing, setIsEditing] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de la mise à jour du profil
    setUser(formData);
    setIsEditing(false);
    setMessage({ text: 'Profil mis à jour avec succès', type: 'success' });
    
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérification de base pour le mot de passe
    if (passwordData.newPassword !== passwordData.confirmNewPassword) {
      setMessage({ text: 'Les mots de passe ne correspondent pas', type: 'error' });
      return;
    }

    // Simulation de la mise à jour du mot de passe
    setMessage({ text: 'Mot de passe mis à jour avec succès', type: 'success' });
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    });
    
    setTimeout(() => {
      setMessage({ text: '', type: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-dark-gray mb-12">Mon Profil</h1>
        
        {message.text && (
          <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message.text}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations du profil */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-dark-gray">Informations personnelles</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-sun-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
                >
                  Modifier
                </button>
              )}
            </div>

            {isEditing ? (
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleProfileChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleProfileChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleProfileChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                    Rôle
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                  >
                    <option value="user">Utilisateur</option>
                    <option value="admin">Administrateur</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData(user);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-sun-orange text-white rounded-md hover:bg-orange-600"
                  >
                    Enregistrer
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">Prénom</p>
                    <p className="text-lg">{user.firstName}</p>
                  </div>
                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">Nom</p>
                    <p className="text-lg">{user.lastName}</p>
                  </div>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg">{user.email}</p>
                </div>
                <div className="border-b pb-2">
                  <p className="text-sm text-gray-500">Rôle</p>
                  <p className="text-lg">{user.role === 'admin' ? 'Administrateur' : 'Utilisateur'}</p>
                </div>
              </div>
            )}
          </div>

          {/* Changement de mot de passe */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-dark-gray mb-6">Changer mon mot de passe</h2>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                />
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                />
              </div>

              <div>
                <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmer nouveau mot de passe
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  value={passwordData.confirmNewPassword}
                  onChange={handlePasswordChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sun-orange focus:border-sun-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sun-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
              >
                Mettre à jour le mot de passe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 