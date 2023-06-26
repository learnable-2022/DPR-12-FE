
    if (
      !firstName ||
      !lastName ||
      !email ||
      !licenseNO ||
      !specialty ||
      !password ||
      !confirm_password
    ) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirm_password) {
      setError('Passwords do not match');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (licenseNO.length > 11) {
      setError('License number must be less than or equal to 11 characters long');
      return;
    }

    try {
      const response = await fetch(
        'https://vitals-8myt.onrender.com/vitals/doctors/register',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            licenseNO,
            specialty,
            password,
            confirm_password,
          }),
          redirect: 'follow',
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.Success) {
        console.log(data);
        setMessage('Account Created Successfully... Proceed to Login');
      } else {
        setError('Account creation failed');
      }
    } catch (error) {
      setError(error.message);
    }
  };