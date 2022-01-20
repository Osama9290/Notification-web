             await axios
              .post("http://localhost:2000/receiver-email/", { to, link,receiverName,receiverContact,name,quantity,streetAddress,
              category,province,city,donorContact,donorName })
              .then((response) => setMsg(response.data.respMesg)),
              
                await axios
                  .post("http://localhost:2000/receiver-email2/", { donorName, link,receiverName,receiverContact,name,quantity,streetAddress,
                  category,province,city,donorEmail })
                  .then((response) => setMsg(response.data.respMesg));