import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormData } from './models/form-data';
import { setData } from './store/material.actions';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  form: FormGroup

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      preferredAnimal: [null, Validators.required]
    })
  }

  openDialog(): void {
    let formData: FormData = this.form.value;
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: formData.firstName, lastName: formData.lastName, preferredAnimal: formData.preferredAnimal }
    });

    dialogRef.afterClosed().subscribe(result => {
      debugger
      let formData: FormData = this.form.value;
      this.store.dispatch(setData({formData}));
      this.form.reset();
    });
  }

}
