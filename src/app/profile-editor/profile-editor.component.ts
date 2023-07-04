import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent {
  aliases: FormArray;
  constructor () {
    this.aliases = this.profileForm.get("aliases") as FormArray;
  }
  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    address: new FormGroup({
      street: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      zip: new FormControl("", Validators.required)
    }),
    aliases: new FormArray([])
  })
  onSubmit(): void {
    console.log(this.profileForm.value);
  }
  addUserField() {
    this.aliases.push(new FormControl())
  }
  deleteUserField(index: number) {
    this.aliases.removeAt(index);
  }
  get firstName(): any {
    return this.profileForm.get("firstName")
  }
}
