/*  Wizard */
jQuery(function ($) {
  "use strict";
  //$("form#wrapped").attr("action", "send_email_1.php");
  $("#wizard_container")
    .wizard({
      stepsWrapper: "#wrapped",
      submit: ".submit",
      unidirectional: false,
      beforeSelect: function (event, state) {
        // if ($("input#website").val().length != 0) {
        //   return false;
        // } else {
        //     console.log($("input#email").val());
        //     console.log("dans le premier cas d'erreur");
        //     return false
        // }
        if (!state.isMovingForward) return true;
        var inputs = $(this).wizard("state").step.find(":input");
        return !inputs.length || !!inputs.valid();
      },
    })
    .validate({
      errorPlacement: function (error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
          error.insertBefore(element.next());
        } else {
          error.insertAfter(element);
        }
      },
    });
  //  progress bar
  $("#progressbar").progressbar();
  $("#wizard_container").wizard({
    afterSelect: function (event, state) {
      $("#progressbar").progressbar("value", state.percentComplete);
      $("#location").text(
        "" + state.stepsComplete + " of " + state.stepsPossible + " completed"
      );
    },
  });
});

$("#wizard_container").wizard({
  transitions: {
    branchtype: function ($step, action) {
      var branch = $step.find(":checked").val();
      if (!branch) {
        $("form").valid();
      }
      return branch;
    },
  },
});


//---------------------FORM------------------------

// Input name and email value
function getVals(formControl, controlType) {
  switch (controlType) {
    case "nom_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#nom_field").text(value);
      break;

    case "prenom_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#prenom_field").text(value);
      break;

      case "age_field":
        // Get the value for input
        var value = $(formControl).val();
        $("#age_field").text(value);
        break;

    case "mail_field":
      // Get the value for input
      var value = $(formControl).val();
      $("#mail_field").text(value);
      break;

    case "telephone_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#telephone_field").text(value);
      break;

      case "num_parent_field":
      // Get the value for phone input
      var value = $(formControl).val();
      $("#num_parent_field").text(value);
      break;

    case "niveauEtude_field":
      // Get the value for date input
      var value = $(formControl).val();
      $("#niveauEtude_field").text(value);
      break;

    case "motivation_field":
      // Get the value for textarea when "Autre" is selected
      var value = $(formControl).val();
      $("#motivation_field").text(value);
      break;

      case "etablissement_field":
        // Get the value for textarea when "Autre" is selected
        var value = $(formControl).val();
        $("#etablissement_field").text(value);
        break;

    case "donneePersonnel_field":
      // Get the value of the first radio button
      if ($(formControl).is(":checked")) {
        var value = $(formControl).val();
        $("#donneePersonnel_field").text(value);
      }
      break;
  }
}

const checkActive = document.querySelector('.check');
const btnSubmit = document.querySelector('.btn_submit');
btnSubmit.disabled = true;


checkActive.addEventListener('click', () => {
  if (checkActive.checked) {
    console.log('checked');
    checkActive.checked = true;
    btnSubmit.disabled = false;
    } else {
      console.log('unchecked');
      btnSubmit.disabled = true;
      }
})
// -----------------------------Montrer la politique de Confidentialité------------------------------------

const pConfid = document.querySelector('.P-confid');
const afficherDoc = document.querySelector('.div_p_config');
const fermer = document.querySelector('.ligne_polit_confi .span i');
let estAfficher = false;
pConfid.addEventListener('click', ()=>{
  if (estAfficher) {
    afficherDoc.classList.remove("active");
    estAfficher = false;
    pConfid.innerHTML="Politique de confidentialité"
  }
  else {
    afficherDoc.classList.add("active");
    estAfficher = true;
    pConfid.innerHTML="Fermer"
  }
})

//_______________________ Saisir un nombre negatif____________________
