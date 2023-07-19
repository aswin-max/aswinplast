if ('contacts' in navigator && 'ContactsManager' in window) {
    const saveContact = async () => {
      const contactData = {
        name: 'John Doe',
        phoneNumbers: [{ value: '+1234567890' }],
      };
  
      try {
        const contact = await navigator.contacts.create(contactData);
        await contact.save();
        console.log('Contact saved successfully!');
      } catch (error) {
        console.error('Error saving contact:', error);
      }
    };
  
    saveContact();
  } else {
    console.log('Contacts API is not supported in this browser.');
  }
  